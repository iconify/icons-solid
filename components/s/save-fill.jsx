import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrjuh8bfk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mrjuh8bfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:save-fill"} {...others} />);
}

export default Component;
