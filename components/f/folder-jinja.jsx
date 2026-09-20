import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2gdbkbzv.css';
import '../../css/d/dn50i0run.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k2gdbkbzv"/><path class="dn50i0run"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-jinja"} {...others} />);
}

export default Component;
