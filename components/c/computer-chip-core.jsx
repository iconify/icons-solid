import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zx3r8lbcb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zx3r8lbcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:computer-chip-core"} {...others} />);
}

export default Component;
