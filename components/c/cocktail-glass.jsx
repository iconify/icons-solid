import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bh0q_igbx.css';
import '../../css/n/nhdhqcbza.css';
import '../../css/a/aambbrbcu.css';
import '../../css/q/q0tp6zb7n.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bh0q_igbx"/><path class="nhdhqcbza"/><path class="aambbrbcu"/><path class="q0tp6zb7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cocktail-glass"} {...others} />);
}

export default Component;
