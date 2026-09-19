import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zo4xqf7hv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zo4xqf7hv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:ejs"} {...others} />);
}

export default Component;
