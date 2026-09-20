import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwxs4otxq.css';
import '../../css/u/u6npppb7b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hwxs4otxq"/><path class="u6npppb7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:speaker-1-bold"} {...others} />);
}

export default Component;
