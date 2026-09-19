import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/y/ytsky4ozq.css';
import '../../css/g/g1owdqb7d.css';
import '../../css/n/n5l_c4wos.css';
import '../../css/r/r6viuvbyf.css';
import '../../css/h/hgxe7-bdb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect class="ytsky4ozq"/><path class="g1owdqb7d"/><path class="n5l_c4wos"/><path class="r6viuvbyf"/><path class="hgxe7-bdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:playback-progress"} {...others} />);
}

export default Component;
