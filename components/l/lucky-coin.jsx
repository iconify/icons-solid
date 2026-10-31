import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/z6ndlsldf.css';
import '../../css/g/grxhffbhv.css';
import '../../css/d/dhh1urbvj.css';
import '../../css/k/kgoitsb9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow z6ndlsldf"/><path class="grxhffbhv wm-shadow"/><path class="dhh1urbvj"/><path class="kgoitsb9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:lucky-coin"} {...others} />);
}

export default Component;
