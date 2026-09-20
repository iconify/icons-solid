import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wlttq6b8t.css';
import '../../css/f/f_p17abjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wlttq6b8t"/><path class="f_p17abjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:umbrella-fill"} {...others} />);
}

export default Component;
