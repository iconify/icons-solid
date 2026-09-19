import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmsje_bdw.css';

const viewBox = {"width":20,"height":24};
const content = `<path class="nmsje_bdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:stack-overflow"} {...others} />);
}

export default Component;
