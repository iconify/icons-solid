import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2g3rbt8a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a2g3rbt8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:school-xmark-alt-outline"} {...others} />);
}

export default Component;
