import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v21qiwb4s.css';
import '../../css/a/adlgaeiiu.css';
import '../../css/n/no33nhh4y.css';
import '../../css/o/ot7_i2n6t.css';
import '../../css/b/bhbst9bmf.css';
import '../../css/r/rxv4uzbpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="v21qiwb4s"/><path class="adlgaeiiu"/><path class="no33nhh4y"/><path class="ot7_i2n6t"/><path class="bhbst9bmf"/><path class="rxv4uzbpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-git-linear"} {...others} />);
}

export default Component;
