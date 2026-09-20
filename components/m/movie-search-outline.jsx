import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3_f12b3p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a3_f12b3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:movie-search-outline"} {...others} />);
}

export default Component;
