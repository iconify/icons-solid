import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iyn2r2b5d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iyn2r2b5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:payload-cms"} {...others} />);
}

export default Component;
