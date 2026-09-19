import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/k/kspzgnbsg.css';
import '../../css/j/jhqm8jbyo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdw8jicgM"><g class="wwvp95byt"><rect class="kspzgnbsg"/><path class="jhqm8jbyo"/></g></mask></defs><path mask="url(#SVGdw8jicgM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:data-sheet"} {...others} />);
}

export default Component;
