import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zi4wg5b2c.css';
import '../../css/o/obi015b0i.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="zi4wg5b2c"/><path class="obi015b0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:materializecss"} {...others} />);
}

export default Component;
