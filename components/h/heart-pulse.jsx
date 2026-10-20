import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sz8tqk1vi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sz8tqk1vi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:heart-pulse"} {...others} />);
}

export default Component;
