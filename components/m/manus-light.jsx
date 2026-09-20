import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pglcr0mfc.css';

const viewBox = {"width":60,"height":60};
const content = `<path clip-rule="evenodd" class="pglcr0mfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:manus-light"} {...others} />);
}

export default Component;
