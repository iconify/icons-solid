import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/k/knrsqtfts.css';
import '../../css/q/qp71o_xbh.css';
import '../../css/r/rvsjambol.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGrFFZMe2p"><g class="s9cl3zbei"><circle class="knrsqtfts"/><path class="qp71o_xbh"/><path class="rvsjambol"/></g></mask></defs><path mask="url(#SVGrFFZMe2p)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:timer"} {...others} />);
}

export default Component;
