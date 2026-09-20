import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uf_5_z44w.css';
import '../../css/c/c-yqibcyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uf_5_z44w"/><path class="c-yqibcyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:panel-bottom-dashed-fill"} {...others} />);
}

export default Component;
