import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmy7obc7r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lmy7obc7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:twinkly-candies-pearl"} {...others} />);
}

export default Component;
