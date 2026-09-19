import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_mcmiblg.css';
import '../../css/y/y73gmufio.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y_mcmiblg"/><path class="y73gmufio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:application-instance-outlined"} {...others} />);
}

export default Component;
