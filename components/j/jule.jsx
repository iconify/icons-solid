import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_4n6ub8r.css';
import '../../css/t/tn4_b_t8u.css';
import '../../css/o/op37kihor.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i_4n6ub8r"/><path class="tn4_b_t8u"/><path class="op37kihor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:jule"} {...others} />);
}

export default Component;
