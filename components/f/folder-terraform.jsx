import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6cjc0bct.css';
import '../../css/x/xb829869a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v6cjc0bct"/><path class="xb829869a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-terraform"} {...others} />);
}

export default Component;
