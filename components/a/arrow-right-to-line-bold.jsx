import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yybu3hn3z.css';
import '../../css/o/oa733acec.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yybu3hn3z"/><path class="oa733acec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-right-to-line-bold"} {...others} />);
}

export default Component;
