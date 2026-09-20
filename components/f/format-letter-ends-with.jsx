import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5zp4067s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b5zp4067s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:format-letter-ends-with"} {...others} />);
}

export default Component;
