import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xnu5lobkb.css';
import '../../css/j/jjiany4ql.css';
import '../../css/q/qxq43kb0f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2VyDsdCy"><g class="rohhhzb0l"><path class="xnu5lobkb"/><path class="jjiany4ql"/><path class="qxq43kb0f"/></g></mask></defs><path mask="url(#SVG2VyDsdCy)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:shaver"} {...others} />);
}

export default Component;
