import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbh-40nht.css';
import '../../css/j/jze6f0ytj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lbh-40nht"/><path class="jze6f0ytj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:id-badge-16"} {...others} />);
}

export default Component;
