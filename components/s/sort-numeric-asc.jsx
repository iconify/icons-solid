import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kic8bacdg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kic8bacdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:sort-numeric-asc"} {...others} />);
}

export default Component;
