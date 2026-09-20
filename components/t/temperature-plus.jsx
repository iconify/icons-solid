import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azf7pht0e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="azf7pht0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:temperature-plus"} {...others} />);
}

export default Component;
