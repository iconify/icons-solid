import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfvra_tsh.css';
import '../../css/m/maw6_-12u.css';

const viewBox = {"width":49,"height":48};
const content = `<defs><mask id="SVG5B2KGOku"><path class="gfvra_tsh"/></mask></defs><path mask="url(#SVG5B2KGOku)" class="maw6_-12u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bottom-bar-one"} {...others} />);
}

export default Component;
