import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rxdjtqbaf.css';
import '../../css/g/gl7w86stz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rxdjtqbaf"/><path class="gl7w86stz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:case-sensitive-two-tone"} {...others} />);
}

export default Component;
