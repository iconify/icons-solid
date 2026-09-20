import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/biji12x1i.css';

const viewBox = {"width":12,"height":16};
const content = `<path class="biji12x1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:gist"} {...others} />);
}

export default Component;
