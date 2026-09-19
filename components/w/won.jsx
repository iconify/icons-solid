import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d47xi2b9o.css';
import '../../css/a/advyo0b0z.css';
import '../../css/n/nisd5zbwq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d47xi2b9o"/><path class="advyo0b0z"/><path class="nisd5zbwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:won"} {...others} />);
}

export default Component;
