import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n43rmlbbs.css';
import '../../css/i/i47tz2njj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="n43rmlbbs"/><path class="i47tz2njj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:columns"} {...others} />);
}

export default Component;
