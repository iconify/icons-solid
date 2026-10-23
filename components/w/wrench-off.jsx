import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9x7_fvwo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d9x7_fvwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:wrench-off"} {...others} />);
}

export default Component;
