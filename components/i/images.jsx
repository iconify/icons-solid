import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jo0sq20sg.css';
import '../../css/c/cseo9q__p.css';
import '../../css/m/m2pqg7w3w.css';
import '../../css/f/ff-8b2xfg.css';
import '../../css/p/pyoxboxsu.css';
import '../../css/j/j3ihixg7r.css';
import '../../css/n/nc_nvlv5s.css';
import '../../css/o/o48m08bpp.css';
import '../../css/i/ibdcsd1wh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="jo0sq20sg"/><path class="cseo9q__p"/><path class="m2pqg7w3w"/><path class="ff-8b2xfg wm-shine"/><path class="pyoxboxsu wm-k"/><path class="j3ihixg7r wm-a"/><path class="nc_nvlv5s"/><path class="o48m08bpp"/><path class="ibdcsd1wh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:images"} {...others} />);
}

export default Component;
