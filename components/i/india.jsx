import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7ephwb-o.css';
import '../../css/p/peudg--ud.css';
import '../../css/w/wx9y-fb7s.css';
import '../../css/u/u69-q7bww.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="x7ephwb-o"/><path class="peudg--ud"/><path class="wx9y-fb7s"/><path class="u69-q7bww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:india"} {...others} />);
}

export default Component;
