import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ujd6pxb0p.css';
import '../../css/k/k35tmdb5w.css';
import '../../css/k/k4leaeb2y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ujd6pxb0p"/><path class="k35tmdb5w"/><path class="k4leaeb2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:search-box-light"} {...others} />);
}

export default Component;
