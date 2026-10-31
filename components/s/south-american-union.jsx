import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jztn7z8ge.css';
import '../../css/x/x47r2-ccs.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="jztn7z8ge"/><path class="x47r2-ccs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:south-american-union"} {...others} />);
}

export default Component;
