import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6j0uvbgv.css';
import '../../css/y/y7cjcccww.css';
import '../../css/u/u-6-7yubm.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="u6j0uvbgv"/><path class="y7cjcccww"/><path class="u-6-7yubm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:vertx-wordmark"} {...others} />);
}

export default Component;
