import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmv3c7gqo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gmv3c7gqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:t-shirt"} {...others} />);
}

export default Component;
