import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqznn1ydc.css';
import '../../css/j/j3tgze_bz.css';
import '../../css/y/ytep3bcxs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGV948zcnn"><g class="wqznn1ydc"><path class="j3tgze_bz"/><path class="ytep3bcxs"/></g></mask></defs><path mask="url(#SVGV948zcnn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:thin"} {...others} />);
}

export default Component;
