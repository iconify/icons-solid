import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yyqian0hg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yyqian0hg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:rss-duotone-round"} {...others} />);
}

export default Component;
