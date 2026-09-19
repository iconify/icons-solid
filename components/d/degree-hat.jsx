import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/q/qamo9rbbx.css';
import '../../css/m/m37tbt41a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZ6jdHdfu"><g class="v3_i3wktz"><path class="qamo9rbbx"/><path class="m37tbt41a"/></g></mask></defs><path mask="url(#SVGZ6jdHdfu)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:degree-hat"} {...others} />);
}

export default Component;
