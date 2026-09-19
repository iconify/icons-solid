import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/i/i5p4ugbzq.css';
import '../../css/h/hz7q78o0c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG4TP2IeyN"><g class="gopnm44um"><rect class="i5p4ugbzq"/><path class="hz7q78o0c"/></g></mask></defs><path mask="url(#SVG4TP2IeyN)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:alignment-vertical-right"} {...others} />);
}

export default Component;
