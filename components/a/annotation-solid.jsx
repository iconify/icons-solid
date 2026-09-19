import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwzkkpb4c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mwzkkpb4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:annotation-solid"} {...others} />);
}

export default Component;
