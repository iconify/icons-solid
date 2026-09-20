import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xr1tfnb7u.css';
import '../../css/g/gnwbtmb5j.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="xr1tfnb7u"/><path class="gnwbtmb5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:export-16"} {...others} />);
}

export default Component;
