import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2n198b7o.css';
import '../../css/x/xeh2z5bsr.css';

const viewBox = {"width":18,"height":20,"left":3,"top":2};
const content = `<path class="o2n198b7o"/><circle class="xeh2z5bsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:ultanimus"} {...others} />);
}

export default Component;
