import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhd83ub7w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nhd83ub7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:text-box-minus"} {...others} />);
}

export default Component;
