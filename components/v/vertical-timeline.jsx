import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/j/jxr8m2bzo.css';
import '../../css/h/h1b3bbbod.css';
import '../../css/o/o2u4fe-pd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGOweoJeDO"><g class="rohhhzb0l"><path class="jxr8m2bzo"/><path class="h1b3bbbod"/><path class="o2u4fe-pd"/></g></mask></defs><path mask="url(#SVGOweoJeDO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:vertical-timeline"} {...others} />);
}

export default Component;
