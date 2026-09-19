import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/n/n4or7achu.css';
import '../../css/y/yhqlegbzf.css';
import '../../css/d/drl5wdbml.css';
import '../../css/s/ssmzfzbqn.css';
import '../../css/y/yed4u6cxk.css';
import '../../css/g/gceog818q.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="gopnm44um"><path class="n4or7achu"/><rect class="yhqlegbzf"/><rect class="drl5wdbml"/><rect class="ssmzfzbqn"/><rect class="yed4u6cxk"/><rect class="gceog818q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:barcode-read"} {...others} />);
}

export default Component;
