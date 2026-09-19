import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1y0igb8r.css';
import '../../css/j/j48tzybig.css';
import '../../css/t/tz5dmibxq.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="k1y0igb8r"/><path class="j48tzybig"/><path class="tz5dmibxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:medicine-box-twotone"} {...others} />);
}

export default Component;
