import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vs0d6y-st.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vs0d6y-st"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hotel-fill-round"} {...others} />);
}

export default Component;
