import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p87_qmbzl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p87_qmbzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:step-forward"} {...others} />);
}

export default Component;
