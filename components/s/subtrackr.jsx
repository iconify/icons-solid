import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_-dcbbxg.css';
import '../../css/b/b9nh0sb1l.css';
import '../../css/l/lv_7odbrh.css';
import '../../css/i/ivu5h9bdp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b_-dcbbxg"/><path class="b9nh0sb1l"/><path class="lv_7odbrh"/><path class="ivu5h9bdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:subtrackr"} {...others} />);
}

export default Component;
