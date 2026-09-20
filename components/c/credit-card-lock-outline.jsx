import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9ouh7i8w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r9ouh7i8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:credit-card-lock-outline"} {...others} />);
}

export default Component;
