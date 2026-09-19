import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bg_xf-bjm.css';
import '../../css/s/stheyzbwt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bg_xf-bjm"/><path class="stheyzbwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:version-minor"} {...others} />);
}

export default Component;
