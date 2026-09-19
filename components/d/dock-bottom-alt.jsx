import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emos5l7br.css';
import '../../css/z/zp9iurb4m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="emos5l7br"/><path class="zp9iurb4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dock-bottom-alt"} {...others} />);
}

export default Component;
