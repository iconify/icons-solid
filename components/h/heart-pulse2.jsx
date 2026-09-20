import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pa6pgeb4t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pa6pgeb4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:heart-pulse2"} {...others} />);
}

export default Component;
