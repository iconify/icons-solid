import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5nzkvbsa.css';
import '../../css/b/bhztshb0g.css';
import '../../css/n/n1mj_5hgu.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="o5nzkvbsa"/><path class="bhztshb0g"/><path class="n1mj_5hgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:fund-view"} {...others} />);
}

export default Component;
