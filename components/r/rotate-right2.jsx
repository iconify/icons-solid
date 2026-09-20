import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rz9ww4b8t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rz9ww4b8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:rotate-right2"} {...others} />);
}

export default Component;
