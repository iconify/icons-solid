import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2ahyfbrs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t2ahyfbrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:dots-horizontal-circle"} {...others} />);
}

export default Component;
