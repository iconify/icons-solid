import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9_00hbai.css';
import '../../css/l/l_m-ojccy.css';
import '../../css/i/ib-739bah.css';

const viewBox = {"width":128,"height":128};
const content = `<rect class="z9_00hbai"/><rect class="l_m-ojccy"/><path class="ib-739bah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:typer-wordmark"} {...others} />);
}

export default Component;
