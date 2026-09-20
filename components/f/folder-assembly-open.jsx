import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3p6b1b2l.css';
import '../../css/u/uga_xo1ks.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z3p6b1b2l"/><path class="uga_xo1ks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-assembly-open"} {...others} />);
}

export default Component;
