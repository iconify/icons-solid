import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/goc6or3vc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="goc6or3vc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:door-closed-locked"} {...others} />);
}

export default Component;
