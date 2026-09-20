import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/keb02lb-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="keb02lb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:lock-open"} {...others} />);
}

export default Component;
