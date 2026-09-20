import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/p/pcl356uns.css';
import '../../css/d/d9f9t572w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="pcl356uns"/><path class="d9f9t572w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:bank-note-2"} {...others} />);
}

export default Component;
