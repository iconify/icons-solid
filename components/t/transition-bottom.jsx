import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzn5nb1wq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mzn5nb1wq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:transition-bottom"} {...others} />);
}

export default Component;
