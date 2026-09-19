import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6z_u39ix.css';
import '../../css/k/kfaykc6be.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="m6z_u39ix"/><path class="kfaykc6be"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:fetch-upload-cloud"} {...others} />);
}

export default Component;
