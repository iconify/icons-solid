import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4yex3z8a.css';
import '../../css/u/uwvg1pb6m.css';
import '../../css/d/dlp7nstpk.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="a4yex3z8a"/><path class="uwvg1pb6m"/><circle class="dlp7nstpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:hardware-security-module"} {...others} />);
}

export default Component;
