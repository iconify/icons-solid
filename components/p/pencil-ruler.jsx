import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzo83b3uj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pzo83b3uj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:pencil-ruler"} {...others} />);
}

export default Component;
