import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/i/i5p4ugbzq.css';
import '../../css/l/lwj-zrb7s.css';
import '../../css/p/pfczs7qky.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG0WSjRcHR"><g class="gopnm44um"><rect class="i5p4ugbzq"/><path class="lwj-zrb7s"/><path class="pfczs7qky"/></g></mask></defs><path mask="url(#SVG0WSjRcHR)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:f-n-key"} {...others} />);
}

export default Component;
