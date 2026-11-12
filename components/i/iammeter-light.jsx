import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bypt6tfji.css';
import '../../css/x/x6lp5sbsv.css';
import '../../css/y/yxbj3znwq.css';
import '../../css/o/oj59phb1q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bypt6tfji"/><path class="x6lp5sbsv"/><path class="yxbj3znwq"/><path class="oj59phb1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:iammeter-light"} {...others} />);
}

export default Component;
