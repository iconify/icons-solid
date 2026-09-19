import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e22xqcbkt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e22xqcbkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:heating-square-solid"} {...others} />);
}

export default Component;
