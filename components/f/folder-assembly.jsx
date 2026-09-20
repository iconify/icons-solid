import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hg171ebhl.css';
import '../../css/u/uga_xo1ks.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hg171ebhl"/><path class="uga_xo1ks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-assembly"} {...others} />);
}

export default Component;
