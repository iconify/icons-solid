import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b1xq9pboe.css';
import '../../css/c/cpzpl-ooe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b1xq9pboe"/><path class="cpzpl-ooe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:imdb"} {...others} />);
}

export default Component;
