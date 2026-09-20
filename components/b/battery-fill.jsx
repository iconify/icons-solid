import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tcjy62b_y.css';
import '../../css/v/vwx95215b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tcjy62b_y"/><path class="vwx95215b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:battery-fill"} {...others} />);
}

export default Component;
