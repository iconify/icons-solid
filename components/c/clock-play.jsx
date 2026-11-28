import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/ve0ei_2st.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ve0ei_2st"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:clock-play"} {...others} />);
}

export default Component;
