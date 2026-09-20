import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4b7xbbez.css';

const viewBox = {"width":360,"height":90};
const content = `<path class="q4b7xbbez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:morgan-stanley"} {...others} />);
}

export default Component;
