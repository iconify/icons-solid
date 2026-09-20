import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uy4f4tdmp.css';
import '../../css/d/di45v_bru.css';
import '../../css/b/bzswb8b6a.css';
import '../../css/d/d2db97k3l.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="uy4f4tdmp"/><path class="di45v_bru"/><path class="bzswb8b6a"/><path class="d2db97k3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:oil-drum"} {...others} />);
}

export default Component;
