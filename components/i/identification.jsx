import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5-lgcc0a.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="u5-lgcc0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:identification"} {...others} />);
}

export default Component;
