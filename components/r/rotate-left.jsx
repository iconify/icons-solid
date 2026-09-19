import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cbb2-5bwt.css';
import '../../css/o/o855tz_5q.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="cbb2-5bwt"/><path class="o855tz_5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:rotate-left"} {...others} />);
}

export default Component;
