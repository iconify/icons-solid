import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kamd1_bjv.css';
import '../../css/j/jgjn71b8j.css';
import '../../css/c/c65-ehvfy.css';
import '../../css/o/oyertvasq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kamd1_bjv"/><path class="jgjn71b8j"/><path class="c65-ehvfy"/><path class="oyertvasq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:supermarket-48"} {...others} />);
}

export default Component;
