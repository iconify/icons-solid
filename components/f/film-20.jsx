import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewn1ke3br.css';
import '../../css/x/xxdenrb3z.css';
import '../../css/l/lqnnr9bgh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ewn1ke3br"/><path class="xxdenrb3z"/><path class="lqnnr9bgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:film-20"} {...others} />);
}

export default Component;
