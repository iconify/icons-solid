import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/voswg_4lh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="voswg_4lh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:calendar-minus"} {...others} />);
}

export default Component;
