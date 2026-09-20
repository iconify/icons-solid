import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cq27ugb2z.css';
import '../../css/l/lhog0tb8y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cq27ugb2z"/><path class="lhog0tb8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-firebase-open"} {...others} />);
}

export default Component;
