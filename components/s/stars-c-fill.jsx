import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/le1y_9kop.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="le1y_9kop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:stars-c-fill"} {...others} />);
}

export default Component;
