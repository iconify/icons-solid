import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/ql_i8kbyq.css';
import '../../css/k/kq57ou01f.css';
import '../../css/u/unhv08bwh.css';
import '../../css/s/s1neog13s.css';
import '../../css/b/bcdx0nhxq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ql_i8kbyq"/><path class="kq57ou01f"/><path clip-rule="evenodd" class="unhv08bwh"/><path class="s1neog13s"/><path clip-rule="evenodd" class="bcdx0nhxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:ubuntu-fill"} {...others} />);
}

export default Component;
