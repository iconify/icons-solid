import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x8pf_69zz.css';
import '../../css/u/u8eu58vpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x8pf_69zz"/><path class="u8eu58vpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hamburger"} {...others} />);
}

export default Component;
