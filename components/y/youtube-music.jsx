import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-mr4fbpj.css';
import '../../css/o/os71ptboc.css';
import '../../css/x/xiq0mebla.css';
import '../../css/b/byz412mey.css';

const viewBox = {"width":192,"height":192};
const content = `<path class="l-mr4fbpj"/><circle class="os71ptboc"/><path class="xiq0mebla"/><path class="byz412mey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:youtube-music"} {...others} />);
}

export default Component;
