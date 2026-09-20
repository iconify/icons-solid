import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6s1n5b5w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a6s1n5b5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:toilet-paper"} {...others} />);
}

export default Component;
