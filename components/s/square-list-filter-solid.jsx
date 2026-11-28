import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/doko_h-hn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="doko_h-hn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:square-list-filter-solid"} {...others} />);
}

export default Component;
