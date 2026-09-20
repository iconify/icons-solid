import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omd6vzz8h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="omd6vzz8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-chevron-up-sharp-fill"} {...others} />);
}

export default Component;
