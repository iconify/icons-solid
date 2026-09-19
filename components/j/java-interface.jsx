import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ni1vsp91j.css';
import '../../css/a/atbqptbwe.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ni1vsp91j"/><path class="atbqptbwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:java-interface"} {...others} />);
}

export default Component;
