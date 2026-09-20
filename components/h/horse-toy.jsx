import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ie1lktb8t.css';
import '../../css/f/fwf3hft6m.css';
import '../../css/d/dph3etpje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ie1lktb8t"/><path class="fwf3hft6m"/><path class="dph3etpje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:horse-toy"} {...others} />);
}

export default Component;
