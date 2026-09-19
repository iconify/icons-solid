import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6zuvtb4k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m6zuvtb4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:diff-modified"} {...others} />);
}

export default Component;
