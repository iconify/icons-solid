import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ko0725l_d.css';
import '../../css/f/fbeaqo8bl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ko0725l_d"/><path clip-rule="evenodd" class="fbeaqo8bl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:search-split-solid"} {...others} />);
}

export default Component;
