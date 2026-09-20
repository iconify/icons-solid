import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thlw7vb4m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="thlw7vb4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-up-wide-narrow-sharp-fill"} {...others} />);
}

export default Component;
