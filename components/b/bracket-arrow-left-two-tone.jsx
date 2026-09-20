import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/ww78ztu8g.css';
import '../../css/s/srbob_bob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ww78ztu8g"/><path class="srbob_bob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bracket-arrow-left-two-tone"} {...others} />);
}

export default Component;
