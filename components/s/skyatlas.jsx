import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bw6ha2eoi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bw6ha2eoi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:skyatlas"} {...others} />);
}

export default Component;
