import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwqarthoa.css';
import '../../css/f/frxk7_buw.css';
import '../../css/y/yrnx5ea_v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gwqarthoa"/><path class="frxk7_buw"/><path class="yrnx5ea_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnifier-check-bold-duotone"} {...others} />);
}

export default Component;
