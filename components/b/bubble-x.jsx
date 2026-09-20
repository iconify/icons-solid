import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bt9bn2uhn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bt9bn2uhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bubble-x"} {...others} />);
}

export default Component;
