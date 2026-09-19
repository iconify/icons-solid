import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/y/yzqd_nbaw.css';
import '../../css/k/kyshkjbdz.css';
import '../../css/p/p8jvkw5nd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="yzqd_nbaw"/><path class="kyshkjbdz"/><path class="p8jvkw5nd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:question-mark-square-thin"} {...others} />);
}

export default Component;
