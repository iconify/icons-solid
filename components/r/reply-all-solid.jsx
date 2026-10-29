import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btcv4zsiz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="btcv4zsiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:reply-all-solid"} {...others} />);
}

export default Component;
