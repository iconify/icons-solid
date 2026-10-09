import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/v/va4-pdb3q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="va4-pdb3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:face-laugh-48"} {...others} />);
}

export default Component;
