import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n17jbjguw.css';
import '../../css/k/ka644-w1m.css';
import '../../css/n/nflgq1baw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n17jbjguw"/><path class="ka644-w1m"/><path class="nflgq1baw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-stack-bold"} {...others} />);
}

export default Component;
