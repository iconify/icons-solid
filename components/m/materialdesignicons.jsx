import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7hs1xg-l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j7hs1xg-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:materialdesignicons"} {...others} />);
}

export default Component;
