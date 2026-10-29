import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a64hb-b0i.css';
import '../../css/d/dqkskjbrf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a64hb-b0i"/><path class="dqkskjbrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:folder-search-2"} {...others} />);
}

export default Component;
