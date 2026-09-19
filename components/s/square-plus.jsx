import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rij442pdg.css';
import '../../css/m/mbirz4byx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rij442pdg"/><path class="mbirz4byx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:square-plus"} {...others} />);
}

export default Component;
