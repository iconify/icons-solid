import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqy86tb6z.css';
import '../../css/s/sfnrnobbo.css';
import '../../css/r/r1uy14ztu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uqy86tb6z"/><path class="sfnrnobbo"/><path class="r1uy14ztu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:phone-call-48-bold"} {...others} />);
}

export default Component;
