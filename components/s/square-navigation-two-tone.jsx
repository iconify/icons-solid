import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/ttm7-_bye.css';
import '../../css/n/nb80adc2c.css';
import '../../css/r/r0twj-bzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ttm7-_bye"/><path class="nb80adc2c"/><path class="r0twj-bzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-navigation-two-tone"} {...others} />);
}

export default Component;
