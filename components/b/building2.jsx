import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/b/bbxq5bc9y.css';
import '../../css/o/o8rhxib8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="bbxq5bc9y"/><path class="o8rhxib8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:building2"} {...others} />);
}

export default Component;
