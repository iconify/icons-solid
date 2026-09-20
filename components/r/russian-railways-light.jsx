import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_z_y4bhj.css';

const viewBox = {"width":110,"height":48.7};
const content = `<path class="n_z_y4bhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:russian-railways-light"} {...others} />);
}

export default Component;
