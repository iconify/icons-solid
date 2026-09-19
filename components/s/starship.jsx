import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmqd7lb1z.css';
import '../../css/s/s6x7m9trg.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><mask id="SVGcVHSkeyt" maskUnits="userSpaceOnUse"><circle class="nmqd7lb1z"/></mask></defs><path mask="url(#SVGcVHSkeyt)" class="s6x7m9trg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:starship"} {...others} />);
}

export default Component;
