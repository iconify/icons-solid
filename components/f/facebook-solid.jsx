import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkb1im0po.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pkb1im0po"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:facebook-solid"} {...others} />);
}

export default Component;
