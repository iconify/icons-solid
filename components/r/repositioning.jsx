import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/d/di2z6-b7f.css';
import '../../css/k/ka6wwks0b.css';
import '../../css/p/p45glrj-o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG7drP2cSq"><g class="wwvp95byt"><path class="di2z6-b7f"/><path class="ka6wwks0b"/><path class="p45glrj-o"/></g></mask></defs><path mask="url(#SVG7drP2cSq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:repositioning"} {...others} />);
}

export default Component;
