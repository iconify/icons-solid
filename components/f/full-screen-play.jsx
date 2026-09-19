import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/z/zqp5lnbil.css';
import '../../css/e/e4vcug-lw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGi8dckb7P"><g class="v3_i3wktz"><path class="zqp5lnbil"/><path class="e4vcug-lw"/></g></mask></defs><path mask="url(#SVGi8dckb7P)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:full-screen-play"} {...others} />);
}

export default Component;
