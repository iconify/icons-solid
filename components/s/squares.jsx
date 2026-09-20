import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1w0zbc1w.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="u1w0zbc1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:squares"} {...others} />);
}

export default Component;
