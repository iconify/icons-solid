import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e6b2l1b0w.css';
import '../../css/v/v47qmgbpf.css';
import '../../css/c/c_zwkzr4c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGo8p6gdyZ"><g class="aql7dnt-u"><path class="e6b2l1b0w"/><path class="v47qmgbpf"/><path class="c_zwkzr4c"/></g></mask></defs><path mask="url(#SVGo8p6gdyZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:skates"} {...others} />);
}

export default Component;
