import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fobtc1bdc.css';
import '../../css/n/n_jh6lbfx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZh3QTFPY"><g class="v3_i3wktz"><path class="fobtc1bdc"/><path class="n_jh6lbfx"/></g></mask></defs><path mask="url(#SVGZh3QTFPY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:rectangular-circular-connection"} {...others} />);
}

export default Component;
