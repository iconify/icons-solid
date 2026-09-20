import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zueiq1v0a.css';
import '../../css/z/zp1azf18h.css';
import '../../css/w/wr4i7gblb.css';
import '../../css/m/m510_tb5f.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="zueiq1v0a"/><path class="zp1azf18h"/><circle class="wr4i7gblb"/><circle class="m510_tb5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:bad-o"} {...others} />);
}

export default Component;
