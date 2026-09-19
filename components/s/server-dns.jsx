import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fse9x8baa.css';
import '../../css/d/dlp7nstpk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fse9x8baa"/><circle class="dlp7nstpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:server-dns"} {...others} />);
}

export default Component;
