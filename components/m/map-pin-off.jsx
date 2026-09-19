import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/svqy3ml4a.css';
import '../../css/b/b66lsbbtf.css';
import '../../css/l/lap40g3pl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="svqy3ml4a"/><path class="b66lsbbtf"/><path class="lap40g3pl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:map-pin-off"} {...others} />);
}

export default Component;
