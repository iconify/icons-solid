import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/axvwh0bez.css';
import '../../css/c/cczcib67m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEDpbBe5z"><g class="v3_i3wktz"><path class="axvwh0bez"/><path clip-rule="evenodd" class="cczcib67m"/></g></mask></defs><path mask="url(#SVGEDpbBe5z)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:book"} {...others} />);
}

export default Component;
