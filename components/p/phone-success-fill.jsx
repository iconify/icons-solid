import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyrrl6b4o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wyrrl6b4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:phone-success-fill"} {...others} />);
}

export default Component;
