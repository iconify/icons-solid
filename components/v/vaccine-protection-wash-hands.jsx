import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3u3rrbyn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a3u3rrbyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:vaccine-protection-wash-hands"} {...others} />);
}

export default Component;
