import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9pytbryk.css';
import '../../css/k/kuf42lb8e.css';
import '../../css/r/rwa9wmb3w.css';

const viewBox = {"width":95.686,"height":104.463};
const content = `<clipPath id="SVGxhBU85ZH"><path class="h9pytbryk"/></clipPath><g clip-path="url(#SVGxhBU85ZH)" transform="translate(-37.088 -18.94)" class="kuf42lb8e"><path class="rwa9wmb3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:owncast-light"} {...others} />);
}

export default Component;
