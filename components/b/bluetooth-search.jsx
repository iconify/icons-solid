import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pj7b2nb_f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pj7b2nb_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:bluetooth-search"} {...others} />);
}

export default Component;
