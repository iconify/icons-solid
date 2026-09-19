import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_75cubyz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e_75cubyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:nanoleaf-screen-lights"} {...others} />);
}

export default Component;
