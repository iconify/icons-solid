import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jd2c1ndht.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jd2c1ndht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:battery-eco-outline"} {...others} />);
}

export default Component;
