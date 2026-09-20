import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/q/q5wt2mb5e.css';
import '../../css/d/d-s4evbkp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="q5wt2mb5e"/><path class="d-s4evbkp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:link-share-2"} {...others} />);
}

export default Component;
