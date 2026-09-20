import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/va-jgqbfl.css';
import '../../css/d/dgfwwobqt.css';
import '../../css/y/yaehttbgi.css';

const viewBox = {"width":256,"height":292};
const content = `<path class="va-jgqbfl"/><path class="dgfwwobqt"/><path class="yaehttbgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:shopify"} {...others} />);
}

export default Component;
