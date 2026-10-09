import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2nbzfjyr.css';
import '../../css/l/l-kxqtbrp.css';
import '../../css/q/q2b00ib0q.css';
import '../../css/a/ai15lpjsa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r2nbzfjyr"/><path class="l-kxqtbrp"/><path class="q2b00ib0q"/><path class="ai15lpjsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:community-energy-48-bold"} {...others} />);
}

export default Component;
