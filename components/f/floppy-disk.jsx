import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pboeh-bjz.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="pboeh-bjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:floppy-disk"} {...others} />);
}

export default Component;
