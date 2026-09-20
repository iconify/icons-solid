import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhj_kjb2w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bhj_kjb2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:angle-double-down"} {...others} />);
}

export default Component;
