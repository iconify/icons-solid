import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qvbcrdb1n.css';
import '../../css/z/z_cbqpboy.css';
import '../../css/h/hfo2n9z0l.css';
import '../../css/i/ideoyl8wk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><rect class="qvbcrdb1n"/><rect class="z_cbqpboy"/><rect class="hfo2n9z0l"/><rect class="ideoyl8wk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:ellipsis-square"} {...others} />);
}

export default Component;
