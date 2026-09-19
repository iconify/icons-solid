import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0aymbc_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s0aymbc_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:paragraph-solid"} {...others} />);
}

export default Component;
