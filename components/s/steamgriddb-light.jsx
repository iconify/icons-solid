import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6qntnrup.css';
import '../../css/f/fzz6-v-3g.css';
import '../../css/o/o_tfnwc4u.css';
import '../../css/n/nx6toimit.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l6qntnrup"/><path class="fzz6-v-3g"/><path class="o_tfnwc4u"/><path class="nx6toimit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:steamgriddb-light"} {...others} />);
}

export default Component;
