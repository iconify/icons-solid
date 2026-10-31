import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3qu93bwv.css';
import '../../css/w/wbb6ggb3t.css';
import '../../css/b/bhjcuuxbi.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="a3qu93bwv"/><path class="wbb6ggb3t"/><path class="bhjcuuxbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:trinidad-tobago"} {...others} />);
}

export default Component;
