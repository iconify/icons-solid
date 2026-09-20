import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpwd9l.css';
import '../../css/s/so-from-12.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qpwd9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:chevron-down"} {...others} />);
}

export default Component;
