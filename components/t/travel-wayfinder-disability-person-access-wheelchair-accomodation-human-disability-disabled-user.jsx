import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/prb3nzbki.css';
import '../../css/b/bsjvgwb6j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="prb3nzbki"/><path class="bsjvgwb6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-wayfinder-disability-person-access-wheelchair-accomodation-human-disability-disabled-user"} {...others} />);
}

export default Component;
