import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilbmb7yhg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ilbmb7yhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:phone-hang-up"} {...others} />);
}

export default Component;
