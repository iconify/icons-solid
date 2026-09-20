import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3jr0zbzo.css';
import '../../css/s/sdwec7b_p.css';
import '../../css/f/f674p_02h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p3jr0zbzo"/><path class="sdwec7b_p"/><path class="f674p_02h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:sort-alt"} {...others} />);
}

export default Component;
