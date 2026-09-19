import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3jh1-bnt.css';
import '../../css/d/dblasrb2v.css';
import '../../css/w/wxc7mbbhr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGTk2kDbTG"><g class="q3jh1-bnt"><path class="dblasrb2v"/><path class="wxc7mbbhr"/></g></mask></defs><path mask="url(#SVGTk2kDbTG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:youtube"} {...others} />);
}

export default Component;
