import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dqfvh-g1q.css';
import '../../css/d/dappoac4j.css';
import '../../css/x/xsnosccfg.css';
import '../../css/p/pmjjzy17v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dqfvh-g1q"/><path class="dappoac4j"/><path class="xsnosccfg"/><path class="pmjjzy17v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:release"} {...others} />);
}

export default Component;
