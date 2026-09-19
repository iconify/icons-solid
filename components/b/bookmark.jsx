import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p0d6fccef.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="p0d6fccef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:bookmark"} {...others} />);
}

export default Component;
