import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ov4w-vcsn.css';
import '../../css/w/w7jijrg7e.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ov4w-vcsn"/><path class="w7jijrg7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-secure-open"} {...others} />);
}

export default Component;
