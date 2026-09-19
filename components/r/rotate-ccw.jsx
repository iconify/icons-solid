import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uqwm_-q0t.css';
import '../../css/s/seipdv7-u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uqwm_-q0t"/><path class="seipdv7-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:rotate-ccw"} {...others} />);
}

export default Component;
