import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lo6jjhb5p.css';
import '../../css/e/eroa1ibmd.css';
import '../../css/e/ebh6vui7r.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lo6jjhb5p"/><path class="eroa1ibmd"/><path class="ebh6vui7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:index-settings"} {...others} />);
}

export default Component;
