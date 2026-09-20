import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/inbsb8b-e.css';
import '../../css/u/uiypogtcm.css';
import '../../css/m/mp6nn9g5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="inbsb8b-e"/><path class="uiypogtcm"/><path class="mp6nn9g5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-markdown"} {...others} />);
}

export default Component;
