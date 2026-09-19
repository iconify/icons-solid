import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/smvju72-d.css';
import '../../css/e/em92-j02n.css';
import '../../css/r/rt9ertrgk.css';
import '../../css/t/tupok0b3a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="smvju72-d"/><path class="em92-j02n"/><path class="rt9ertrgk"/><path class="tupok0b3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mosque-02"} {...others} />);
}

export default Component;
