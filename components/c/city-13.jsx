import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/slkshmb9e.css';
import '../../css/k/klh3zlbnf.css';
import '../../css/w/wier713wl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="slkshmb9e"/><path class="klh3zlbnf"/><path class="wier713wl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:city-13"} {...others} />);
}

export default Component;
