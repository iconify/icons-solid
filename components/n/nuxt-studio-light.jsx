import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ano3tzyta.css';
import '../../css/t/tey8c23jn.css';

const viewBox = {"width":227,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ano3tzyta"/><path class="tey8c23jn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nuxt-studio-light"} {...others} />);
}

export default Component;
