import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7bq70pmb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t7bq70pmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:calendar-down-arrow-filled"} {...others} />);
}

export default Component;
