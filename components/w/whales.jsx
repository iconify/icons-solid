import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezrac2bcq.css';
import '../../css/c/cuj_81b3k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ezrac2bcq"/><path class="cuj_81b3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:whales"} {...others} />);
}

export default Component;
