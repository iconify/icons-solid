import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/chs_wwive.css';
import '../../css/d/d4xm7xbec.css';
import '../../css/z/z1hhkczws.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="chs_wwive"/><path class="d4xm7xbec"/><path class="z1hhkczws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:packer-wordmark"} {...others} />);
}

export default Component;
