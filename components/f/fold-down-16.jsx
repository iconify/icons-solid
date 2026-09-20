import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w05rj732j.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w05rj732j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:fold-down-16"} {...others} />);
}

export default Component;
