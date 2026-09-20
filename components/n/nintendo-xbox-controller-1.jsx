import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/c/c4aoecbmh.css';
import '../../css/q/qa0u3bcoj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="c4aoecbmh"/><path class="qa0u3bcoj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:nintendo-xbox-controller-1"} {...others} />);
}

export default Component;
