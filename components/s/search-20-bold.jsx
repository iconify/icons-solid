import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jj3zoshwv.css';
import '../../css/u/uf825eo1h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jj3zoshwv"/><path class="uf825eo1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:search-20-bold"} {...others} />);
}

export default Component;
