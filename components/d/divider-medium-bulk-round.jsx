import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9qwkaj6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y9qwkaj6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:divider-medium-bulk-round"} {...others} />);
}

export default Component;
