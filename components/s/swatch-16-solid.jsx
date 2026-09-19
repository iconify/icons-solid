import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3nm04bma.css';
import '../../css/k/khhbi52zz.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="a3nm04bma"/><path class="khhbi52zz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:swatch-16-solid"} {...others} />);
}

export default Component;
