import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xs74-mbgw.css';
import '../../css/j/jwv6tpbbx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xs74-mbgw"/><path class="jwv6tpbbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-wakatime"} {...others} />);
}

export default Component;
