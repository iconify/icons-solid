import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cny4agblb.css';
import '../../css/a/ad1pplybg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cny4agblb"/><path class="ad1pplybg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:sun-one"} {...others} />);
}

export default Component;
