import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqznn1ydc.css';
import '../../css/y/yo05b4clt.css';
import '../../css/x/xhfyzfncc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGBMoW3ddt"><g class="wqznn1ydc"><path class="yo05b4clt"/><path class="xhfyzfncc"/></g></mask></defs><path mask="url(#SVGBMoW3ddt)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:torch"} {...others} />);
}

export default Component;
