import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3cbd4b4a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c3cbd4b4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:weixin-cards-offers"} {...others} />);
}

export default Component;
