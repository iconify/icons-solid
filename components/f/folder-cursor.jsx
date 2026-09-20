import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2gdbkbzv.css';
import '../../css/e/ehmzf8bgn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k2gdbkbzv"/><path class="ehmzf8bgn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-cursor"} {...others} />);
}

export default Component;
