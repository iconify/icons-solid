import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nyjz57b0u.css';
import '../../css/h/h124n3njl.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="nyjz57b0u"/><path class="h124n3njl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:dovecot"} {...others} />);
}

export default Component;
