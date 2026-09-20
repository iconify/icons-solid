import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptw-w1b1h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ptw-w1b1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:bookmark-plus-fill"} {...others} />);
}

export default Component;
