import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h1zaoacko.css';
import '../../css/t/tk84jfbit.css';
import '../../css/w/wx_uucbus.css';
import '../../css/c/c_liyzvfj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="h1zaoacko"/><path class="tk84jfbit"/><path class="wx_uucbus"/><path class="c_liyzvfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:king"} {...others} />);
}

export default Component;
