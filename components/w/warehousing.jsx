import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/f/f69ughbml.css';
import '../../css/n/nk4ez9z6n.css';
import '../../css/h/h79q5vbot.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGbo1IqbPt"><g class="rohhhzb0l"><path class="f69ughbml"/><circle class="nk4ez9z6n"/><path class="h79q5vbot"/></g></mask></defs><path mask="url(#SVGbo1IqbPt)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:warehousing"} {...others} />);
}

export default Component;
