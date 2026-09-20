import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/is83l664r.css';
import '../../css/f/fj75b6jza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="is83l664r"/><rect class="fj75b6jza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mic"} {...others} />);
}

export default Component;
