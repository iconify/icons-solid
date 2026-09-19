import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdrf14ebl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fdrf14ebl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:skip-next"} {...others} />);
}

export default Component;
