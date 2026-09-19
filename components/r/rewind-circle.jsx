import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/myv0d9bop.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="myv0d9bop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:rewind-circle"} {...others} />);
}

export default Component;
