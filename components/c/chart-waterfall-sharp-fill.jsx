import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yo6c03b0x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yo6c03b0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-waterfall-sharp-fill"} {...others} />);
}

export default Component;
