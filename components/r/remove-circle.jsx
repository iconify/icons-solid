import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1_emcbzn.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="p1_emcbzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:remove-circle"} {...others} />);
}

export default Component;
