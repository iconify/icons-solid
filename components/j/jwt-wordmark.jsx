import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqevwuihn.css';
import '../../css/h/h3y3srhuw.css';
import '../../css/m/m0ny71ltk.css';
import '../../css/d/dpj7zshvp.css';
import '../../css/a/annxhtbvs.css';
import '../../css/y/ypf2-ybrp.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="bqevwuihn"/><path class="h3y3srhuw"/><path class="m0ny71ltk"/><path class="dpj7zshvp"/><path class="annxhtbvs"/><path class="ypf2-ybrp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:jwt-wordmark"} {...others} />);
}

export default Component;
