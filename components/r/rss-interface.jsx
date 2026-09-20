import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odhvtp87n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="odhvtp87n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:rss-interface"} {...others} />);
}

export default Component;
