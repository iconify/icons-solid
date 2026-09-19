import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p-e6nbbsd.css';
import '../../css/g/goll4mixz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="p-e6nbbsd"/><path class="goll4mixz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:film"} {...others} />);
}

export default Component;
