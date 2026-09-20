import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/u/utq259i-v.css';
import '../../css/p/p8idbw18h.css';
import '../../css/d/d7lbhzbrk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="utq259i-v"/><path class="p8idbw18h"/><path class="d7lbhzbrk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:thermometer-high"} {...others} />);
}

export default Component;
