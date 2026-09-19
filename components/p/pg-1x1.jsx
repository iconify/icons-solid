import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufgjarbrp.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/by60uqz8g.css';
import '../../css/f/fc2hx-jvu.css';
import '../../css/k/k7uozx7eb.css';
import '../../css/i/izu94qi-e.css';
import '../../css/y/yvpg1ma7i.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGJyxJWJ6X"><path class="ufgjarbrp"/></clipPath></defs><g clip-path="url(#SVGJyxJWJ6X)" transform="translate(-84)scale(1.0321)"><g class="d2kvgvbvc"><path class="by60uqz8g"/><path class="fc2hx-jvu"/></g><path class="k7uozx7eb"/><path class="izu94qi-e"/><path class="yvpg1ma7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:pg-1x1"} {...others} />);
}

export default Component;
