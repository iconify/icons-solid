import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c80kiybsf.css';
import '../../css/i/ib6qaybse.css';
import '../../css/e/efa1bkb1o.css';
import '../../css/d/dntz9tmey.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c80kiybsf"/><path class="ib6qaybse"/><path class="efa1bkb1o"/><path class="dntz9tmey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reorder-outline"} {...others} />);
}

export default Component;
