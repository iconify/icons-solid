import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6hq5bt1d.css';
import '../../css/m/m-9tadk8j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i6hq5bt1d"/><path class="m-9tadk8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:electronics-fuse-bold"} {...others} />);
}

export default Component;
