import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_w102j1p.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="t_w102j1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:movie-rental"} {...others} />);
}

export default Component;
