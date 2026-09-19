import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kq5pa6f5y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kq5pa6f5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:9-now"} {...others} />);
}

export default Component;
