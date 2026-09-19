import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6j_ppv8x.css';
import '../../css/h/h0ktb0wiz.css';
import '../../css/h/hj6ofxbho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m6j_ppv8x"/><path class="h0ktb0wiz"/><path class="hj6ofxbho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:layer"} {...others} />);
}

export default Component;
