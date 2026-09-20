import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvq5dx-8z.css';
import '../../css/n/nj-jrfb9w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wvq5dx-8z"/><path class="nj-jrfb9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:handshake-solid"} {...others} />);
}

export default Component;
