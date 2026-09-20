import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3jdj3btd.css';
import '../../css/t/t61q91bzs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w3jdj3btd"/><path class="t61q91bzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cetus"} {...others} />);
}

export default Component;
