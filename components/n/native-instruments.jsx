import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/plqmpyb-k.css';

const viewBox = {"width":76.1,"height":45};
const content = `<path class="plqmpyb-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:native-instruments"} {...others} />);
}

export default Component;
