import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bq99g-23z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bq99g-23z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:featured-playlist-line"} {...others} />);
}

export default Component;
