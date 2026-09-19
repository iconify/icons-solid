import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epm3pib-b.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="epm3pib-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:backspace-20-solid"} {...others} />);
}

export default Component;
