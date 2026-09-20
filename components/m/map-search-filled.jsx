import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3jy0q-gs.css';
import '../../css/w/w_-a5y10p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j3jy0q-gs"/><path class="w_-a5y10p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:map-search-filled"} {...others} />);
}

export default Component;
