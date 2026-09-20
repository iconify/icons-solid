import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i-r7qgboq.css';
import '../../css/m/mto1a6gii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i-r7qgboq"/><rect class="mto1a6gii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:printer"} {...others} />);
}

export default Component;
