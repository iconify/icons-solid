import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3bf5i-0n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c3bf5i-0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bracket-arrow-up-sharp-fill"} {...others} />);
}

export default Component;
