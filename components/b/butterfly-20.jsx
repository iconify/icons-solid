import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7tynrbzb.css';
import '../../css/b/bqqcw45gt.css';
import '../../css/c/clko2h42t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x7tynrbzb"/><path class="bqqcw45gt"/><path class="clko2h42t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:butterfly-20"} {...others} />);
}

export default Component;
