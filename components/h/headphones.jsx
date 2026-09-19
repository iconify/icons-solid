import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rgxkoxbvw.css';
import '../../css/g/g7mteob6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rgxkoxbvw"/><path class="g7mteob6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:headphones"} {...others} />);
}

export default Component;
