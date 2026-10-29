import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bjjjhtu0t.css';
import '../../css/x/xoejyzbtx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bjjjhtu0t"/><path class="xoejyzbtx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:zodiac-leo"} {...others} />);
}

export default Component;
