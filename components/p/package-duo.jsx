import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vncwlbbyf.css';
import '../../css/s/sqx3j0bau.css';
import '../../css/r/rojp4pxea.css';
import '../../css/a/a91ndtnyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vncwlbbyf"/><path class="sqx3j0bau wm-a"/><path class="rojp4pxea"/><path class="a91ndtnyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:package-duo"} {...others} />);
}

export default Component;
