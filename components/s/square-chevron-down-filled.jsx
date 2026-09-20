import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_vo2cbky.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v_vo2cbky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-chevron-down-filled"} {...others} />);
}

export default Component;
