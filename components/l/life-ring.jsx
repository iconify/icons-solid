import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmjt_wemd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pmjt_wemd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:life-ring"} {...others} />);
}

export default Component;
