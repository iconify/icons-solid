import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gaxm8-_2c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gaxm8-_2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:currency-baht-line"} {...others} />);
}

export default Component;
