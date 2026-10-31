import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv8upmbsd.css';
import '../../css/d/dv__-hbaw.css';
import '../../css/r/rkeykmpmz.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="gv8upmbsd"/><path class="dv__-hbaw"/><path class="rkeykmpmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:maldives"} {...others} />);
}

export default Component;
