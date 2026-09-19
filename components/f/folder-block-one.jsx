import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/h/h744_ccdj.css';
import '../../css/p/p40iu0bgs.css';
import '../../css/k/kc38scbvr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGN0NSScNY"><g class="s9cl3zbei"><path class="h744_ccdj"/><circle class="p40iu0bgs"/><path class="kc38scbvr"/></g></mask></defs><path mask="url(#SVGN0NSScNY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:folder-block-one"} {...others} />);
}

export default Component;
