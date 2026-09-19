import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-el4czwj.css';
import '../../css/b/bp4q0jolu.css';

const viewBox = {"width":100,"height":100};
const content = `<circle class="u-el4czwj"/><path class="bp4q0jolu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"geo:turf-midpoint"} {...others} />);
}

export default Component;
