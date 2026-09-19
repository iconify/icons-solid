import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/a/aya53cc9i.css';
import '../../css/o/o93ugkl0y.css';
import '../../css/t/teo97w_bm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG9os0Ud9d"><g class="s9cl3zbei"><rect class="aya53cc9i"/><path class="o93ugkl0y"/><path class="teo97w_bm"/></g></mask></defs><path mask="url(#SVG9os0Ud9d)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:plug-one"} {...others} />);
}

export default Component;
