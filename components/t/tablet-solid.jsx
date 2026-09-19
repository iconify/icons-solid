import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0yccyk2j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c0yccyk2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:tablet-solid"} {...others} />);
}

export default Component;
