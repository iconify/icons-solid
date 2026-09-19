import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ne0xqbbgd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ne0xqbbgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:collection-play-fill"} {...others} />);
}

export default Component;
