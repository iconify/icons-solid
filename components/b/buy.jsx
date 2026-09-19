import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/b/be4dq25uh.css';
import '../../css/n/n1n4jbu1l.css';
import '../../css/z/zoeq60bqx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQ5dQhctv"><g class="rohhhzb0l"><path clip-rule="evenodd" class="be4dq25uh"/><path class="n1n4jbu1l"/><path class="zoeq60bqx"/></g></mask></defs><path mask="url(#SVGQ5dQhctv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:buy"} {...others} />);
}

export default Component;
