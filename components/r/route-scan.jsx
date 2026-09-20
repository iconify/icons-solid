import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f8nb84bfn.css';
import '../../css/t/tklu6wn7r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f8nb84bfn"/><path class="tklu6wn7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:route-scan"} {...others} />);
}

export default Component;
