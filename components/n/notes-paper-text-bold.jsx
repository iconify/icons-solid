import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzcmoifqe.css';
import '../../css/n/nupkm7b4r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uzcmoifqe"/><path class="nupkm7b4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:notes-paper-text-bold"} {...others} />);
}

export default Component;
