import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-4a-kbti.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b-4a-kbti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:credit-card-solid"} {...others} />);
}

export default Component;
