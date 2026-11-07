import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulrix6h0r.css';
import '../../css/o/opnueljba.css';
import '../../css/t/t7w90pktp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ulrix6h0r"/><path class="opnueljba"/><path class="t7w90pktp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-format-bold-duotone"} {...others} />);
}

export default Component;
