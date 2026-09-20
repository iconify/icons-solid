import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_n7oxbfc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a_n7oxbfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:volume-2"} {...others} />);
}

export default Component;
