import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-8l8abkc.css';
import '../../css/y/yts213bsu.css';
import '../../css/m/majk71b5n.css';
import '../../css/o/ow5iplbrt.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="l-8l8abkc"/><path class="yts213bsu"/><path class="majk71b5n"/><path class="ow5iplbrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:dashboard-twotone"} {...others} />);
}

export default Component;
