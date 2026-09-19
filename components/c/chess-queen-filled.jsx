import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9-f93mzd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u9-f93mzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:chess-queen-filled"} {...others} />);
}

export default Component;
