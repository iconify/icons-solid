import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lc0t7rxjs.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<path class="lc0t7rxjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:chevron-square-right"} {...others} />);
}

export default Component;
