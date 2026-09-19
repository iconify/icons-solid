import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bs3s9vbml.css';
import '../../css/c/cwgd6uiee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bs3s9vbml"/><path class="cwgd6uiee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:airplane-landing-02"} {...others} />);
}

export default Component;
