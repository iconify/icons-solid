import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sfqkxp9kj.css';
import '../../css/v/v08-a-n6j.css';
import '../../css/o/oi80i7wcp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sfqkxp9kj"/><path class="v08-a-n6j"/><path class="oi80i7wcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:ship-cargo"} {...others} />);
}

export default Component;
