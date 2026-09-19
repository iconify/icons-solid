import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/yktsan6da.css';
import '../../css/i/ip1144q6u.css';
import '../../css/j/jf7ne5b_p.css';
import '../../css/j/jtfatk-pq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtYSFPcqM"><g class="s9cl3zbei"><rect class="yktsan6da"/><path class="ip1144q6u"/><path class="jf7ne5b_p"/><path class="jtfatk-pq"/></g></mask></defs><path mask="url(#SVGtYSFPcqM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:modify-two"} {...others} />);
}

export default Component;
