import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bf7pwmbkd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bf7pwmbkd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cloudflare-pages"} {...others} />);
}

export default Component;
