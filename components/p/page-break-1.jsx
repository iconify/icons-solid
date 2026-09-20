import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7to8vrmi.css';
import '../../css/r/r49wnackk.css';

const viewBox = {"width":25,"height":24};
const content = `<path clip-rule="evenodd" class="a7to8vrmi"/><path class="r49wnackk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:page-break-1"} {...others} />);
}

export default Component;
