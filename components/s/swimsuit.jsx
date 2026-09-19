import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h7tcblg-d.css';
import '../../css/m/mktrgdb5i.css';
import '../../css/j/j1pqw0brn.css';
import '../../css/j/j3l3upm6m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGTFWv1c4V"><g class="aql7dnt-u"><path class="h7tcblg-d"/><circle class="mktrgdb5i"/><circle class="j1pqw0brn"/><path class="j3l3upm6m"/></g></mask></defs><path mask="url(#SVGTFWv1c4V)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:swimsuit"} {...others} />);
}

export default Component;
