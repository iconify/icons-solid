import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iiqjy_bud.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iiqjy_bud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:space-ship-2-line"} {...others} />);
}

export default Component;
