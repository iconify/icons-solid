import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2c1ynjwd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c2c1ynjwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hiking-round-outline"} {...others} />);
}

export default Component;
