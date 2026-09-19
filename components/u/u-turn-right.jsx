import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/y/ytyivubup.css';
import '../../css/g/gieyr613j.css';
import '../../css/e/etuwxebqb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGvbemke7S"><g class="rohhhzb0l"><path class="ytyivubup"/><path class="gieyr613j"/><circle class="etuwxebqb"/></g></mask></defs><path mask="url(#SVGvbemke7S)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:u-turn-right"} {...others} />);
}

export default Component;
