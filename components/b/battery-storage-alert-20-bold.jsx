import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q59rnd5au.css';
import '../../css/d/dgoos-asp.css';
import '../../css/o/o34vcmwfm.css';
import '../../css/j/jy-kau6st.css';
import '../../css/j/jeyqzjnhx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q59rnd5au"/><path class="dgoos-asp"/><path class="o34vcmwfm"/><path class="jy-kau6st"/><path class="jeyqzjnhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-storage-alert-20-bold"} {...others} />);
}

export default Component;
