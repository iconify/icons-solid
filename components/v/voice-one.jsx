import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/j/j-v2u4nhg.css';
import '../../css/a/af85iwclp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdzeGqd7Z"><g class="rohhhzb0l"><path class="j-v2u4nhg"/><path class="af85iwclp"/></g></mask></defs><path mask="url(#SVGdzeGqd7Z)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:voice-one"} {...others} />);
}

export default Component;
