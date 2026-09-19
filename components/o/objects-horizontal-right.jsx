import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_j4mhb6r.css';
import '../../css/n/nvxku1vtj.css';
import '../../css/e/eb9scq8yj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a_j4mhb6r"/><rect class="nvxku1vtj"/><rect class="eb9scq8yj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:objects-horizontal-right"} {...others} />);
}

export default Component;
