import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uo061fb5h.css';

const viewBox = {"width":24,"height":24,"left":-1.5,"top":-1.5};
const content = `<path class="uo061fb5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:cutter-f"} {...others} />);
}

export default Component;
