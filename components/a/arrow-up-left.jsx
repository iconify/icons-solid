import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/riq60ynai.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="riq60ynai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:arrow-up-left"} {...others} />);
}

export default Component;
