import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pf2wg-b4f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pf2wg-b4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icons8:generic-sorting"} {...others} />);
}

export default Component;
