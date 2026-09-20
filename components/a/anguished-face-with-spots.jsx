import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5zd7xsej.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="l5zd7xsej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:anguished-face-with-spots"} {...others} />);
}

export default Component;
