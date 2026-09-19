import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsr9xtben.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="hsr9xtben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:language-16-solid"} {...others} />);
}

export default Component;
