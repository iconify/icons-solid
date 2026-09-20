import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uz_dv7bxn.css';
import '../../css/a/aikx1pj2f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uz_dv7bxn"/><path class="aikx1pj2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:book-heart"} {...others} />);
}

export default Component;
