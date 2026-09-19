import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/p/pbrqwuz4v.css';
import '../../css/j/jpcsqgbaq.css';
import '../../css/i/ibt7y1cam.css';
import '../../css/s/sd3ztxbbo.css';
import '../../css/t/tazx-gb3y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGnzYl7dOB"><g class="gopnm44um"><rect class="pbrqwuz4v"/><path class="jpcsqgbaq"/><path class="ibt7y1cam"/><path class="sd3ztxbbo"/><path class="tazx-gb3y"/></g></mask></defs><path mask="url(#SVGnzYl7dOB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:luggage"} {...others} />);
}

export default Component;
