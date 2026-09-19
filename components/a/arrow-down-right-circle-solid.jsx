import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gty_nob9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gty_nob9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:arrow-down-right-circle-solid"} {...others} />);
}

export default Component;
