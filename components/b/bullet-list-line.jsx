import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szv2ndb9y.css';
import '../../css/m/m13qtum7h.css';
import '../../css/h/hnnz2yxiw.css';
import '../../css/i/i_tz54_bx.css';
import '../../css/m/m8a14abit.css';
import '../../css/c/czggyxesy.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<circle class="clr-i-outline clr-i-outline-path-1 szv2ndb9y"/><circle class="clr-i-outline clr-i-outline-path-2 m13qtum7h"/><circle class="clr-i-outline clr-i-outline-path-3 hnnz2yxiw"/><path class="clr-i-outline clr-i-outline-path-4 i_tz54_bx"/><path class="clr-i-outline clr-i-outline-path-5 m8a14abit"/><path class="clr-i-outline clr-i-outline-path-6 czggyxesy"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:bullet-list-line"} {...others} />);
}

export default Component;
