import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nwwpoi3_a.css';
import '../../css/x/x-x_tvbhr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nwwpoi3_a"/><path class="x-x_tvbhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:thumbs-up-duocolor-round"} {...others} />);
}

export default Component;
