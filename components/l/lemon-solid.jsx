import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a__i1hb1s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a__i1hb1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:lemon-solid"} {...others} />);
}

export default Component;
