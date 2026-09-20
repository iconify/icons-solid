import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfa599b0o.css';
import '../../css/p/pc_zkzb0q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vfa599b0o"/><path class="pc_zkzb0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:bilibili-logo-bold"} {...others} />);
}

export default Component;
