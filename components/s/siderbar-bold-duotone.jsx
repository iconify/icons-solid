import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o75u76x7m.css';
import '../../css/u/u0uqtx1rd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o75u76x7m"/><path class="u0uqtx1rd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:siderbar-bold-duotone"} {...others} />);
}

export default Component;
