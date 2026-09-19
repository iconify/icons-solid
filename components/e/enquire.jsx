import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/s/sd7_eg-9t.css';
import '../../css/x/xux_17e-z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGzKwQO2Gl"><g class="rohhhzb0l"><path class="sd7_eg-9t"/><path class="xux_17e-z"/></g></mask></defs><path mask="url(#SVGzKwQO2Gl)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:enquire"} {...others} />);
}

export default Component;
