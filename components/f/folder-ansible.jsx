import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aiap8ebun.css';
import '../../css/k/ka5hixi2k.css';
import '../../css/k/kaxf2trrq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="aiap8ebun"/><path class="ka5hixi2k"/><path class="kaxf2trrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-ansible"} {...others} />);
}

export default Component;
