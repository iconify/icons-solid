import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4-z_mbvu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l4-z_mbvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:square-arrow-right2-filled"} {...others} />);
}

export default Component;
