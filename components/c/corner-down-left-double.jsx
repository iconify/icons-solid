import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k5h671x0w.css';
import '../../css/w/wzhmyrrto.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k5h671x0w"/><path class="wzhmyrrto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:corner-down-left-double"} {...others} />);
}

export default Component;
