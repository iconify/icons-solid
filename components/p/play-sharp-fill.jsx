import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1j8y2p6q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t1j8y2p6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:play-sharp-fill"} {...others} />);
}

export default Component;
