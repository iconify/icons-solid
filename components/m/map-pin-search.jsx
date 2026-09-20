import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rwhacnnbk.css';
import '../../css/g/geda3qblp.css';
import '../../css/f/fumudnnfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rwhacnnbk"/><path class="geda3qblp"/><path class="fumudnnfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:map-pin-search"} {...others} />);
}

export default Component;
