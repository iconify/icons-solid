import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iak8-8yxw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iak8-8yxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:order-checkbox-descending"} {...others} />);
}

export default Component;
