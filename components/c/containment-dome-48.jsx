import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilfmmujdl.css';
import '../../css/c/c65-ehvfy.css';
import '../../css/q/qezh2bc3t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ilfmmujdl"/><path class="c65-ehvfy"/><path class="qezh2bc3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:containment-dome-48"} {...others} />);
}

export default Component;
