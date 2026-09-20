import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f6fu06mto.css';
import '../../css/m/m9rz3zbbf.css';
import '../../css/p/pow4bf5-z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f6fu06mto"/><circle class="m9rz3zbbf"/><circle class="pow4bf5-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:zodiac-cancer"} {...others} />);
}

export default Component;
