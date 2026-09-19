import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbpq65m9a.css';
import '../../css/k/k_0btnw4n.css';
import '../../css/u/ukkseuxmb.css';
import '../../css/u/u-93mqbgq.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="sbpq65m9a"/><use href="#SVGD0oThevo"/><path class="k_0btnw4n"/><use x="23.9" href="#SVGD0oThevo"/><path class="ukkseuxmb"/><defs><path id="SVGD0oThevo" class="u-93mqbgq"/></defs>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:elixir-wordmark"} {...others} />);
}

export default Component;
