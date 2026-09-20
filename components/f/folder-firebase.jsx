import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsuo4vbmg.css';
import '../../css/l/lhog0tb8y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nsuo4vbmg"/><path class="lhog0tb8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-firebase"} {...others} />);
}

export default Component;
