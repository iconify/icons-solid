import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6nt_usom.css';
import '../../css/l/lfbnv8wtq.css';
import '../../css/b/bh5vgerfv.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="e6nt_usom"/><rect class="lfbnv8wtq"/><rect class="bh5vgerfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:columns-3-filled"} {...others} />);
}

export default Component;
