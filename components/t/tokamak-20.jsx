import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgvqv2bst.css';
import '../../css/v/vtc-cfb1t.css';
import '../../css/k/ka-2hq9em.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dgvqv2bst"/><path class="vtc-cfb1t"/><path class="ka-2hq9em"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tokamak-20"} {...others} />);
}

export default Component;
