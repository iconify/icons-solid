import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cyto10bys.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cyto10bys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:distribute-horizontal-center"} {...others} />);
}

export default Component;
