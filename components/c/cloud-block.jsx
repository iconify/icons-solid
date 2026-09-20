import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwtqj9_vi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hwtqj9_vi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:cloud-block"} {...others} />);
}

export default Component;
