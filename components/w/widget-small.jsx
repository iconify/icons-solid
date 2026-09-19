import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/im6fgsjxz.css';
import '../../css/x/xwibx1gek.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="im6fgsjxz"/><path class="xwibx1gek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:widget-small"} {...others} />);
}

export default Component;
