import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r34ssebvg.css';
import '../../css/k/kroiddczm.css';
import '../../css/m/mmoj81bwq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r34ssebvg"/><path class="kroiddczm"/><path class="mmoj81bwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suspension-bolt-bold"} {...others} />);
}

export default Component;
