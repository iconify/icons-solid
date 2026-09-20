import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lej-24q4i.css';
import '../../css/h/h6hs587dj.css';
import '../../css/y/yyw8rgbsu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lej-24q4i"/><path class="h6hs587dj"/><path class="yyw8rgbsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-navigation-fill"} {...others} />);
}

export default Component;
