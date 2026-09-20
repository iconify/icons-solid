import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n6xinhc7m.css';
import '../../css/y/yek9exb0m.css';
import '../../css/s/s8kjchbnl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="n6xinhc7m"/><path class="yek9exb0m"/><path class="s8kjchbnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:users"} {...others} />);
}

export default Component;
