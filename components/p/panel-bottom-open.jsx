import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v7gsg2h2a.css';
import '../../css/a/a32x-wl7l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v7gsg2h2a"/><path class="a32x-wl7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:panel-bottom-open"} {...others} />);
}

export default Component;
