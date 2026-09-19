import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6c8tmzid.css';
import '../../css/f/f8eyw1sna.css';
import '../../css/u/u1jc8vaze.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG9PaAjcIO"><g class="t6c8tmzid"><path class="f8eyw1sna"/><path class="u1jc8vaze"/></g></mask></defs><path mask="url(#SVG9PaAjcIO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:phone-two"} {...others} />);
}

export default Component;
