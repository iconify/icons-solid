import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bznz2_2wt.css';

const viewBox = {"width":960,"height":960,"top":-960};
const content = `<path class="bznz2_2wt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:json"} {...others} />);
}

export default Component;
