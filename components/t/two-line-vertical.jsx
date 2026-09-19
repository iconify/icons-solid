import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qwmxn8bby.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qwmxn8bby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:two-line-vertical"} {...others} />);
}

export default Component;
