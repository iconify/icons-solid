import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u59ysr_vi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u59ysr_vi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:rolled-cloth"} {...others} />);
}

export default Component;
