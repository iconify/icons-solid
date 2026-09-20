import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dagcc8buf.css';
import '../../css/n/ny7q1b0qs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dagcc8buf"/><path class="ny7q1b0qs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:target-user"} {...others} />);
}

export default Component;
