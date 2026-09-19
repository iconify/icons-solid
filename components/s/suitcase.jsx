import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ov51f8b1d.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="ov51f8b1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:suitcase"} {...others} />);
}

export default Component;
