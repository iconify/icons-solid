import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/u/ulkx0nbdh.css';
import '../../css/t/tdrgxhknx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGbSBuC8ZU"><g class="v3_i3wktz"><path class="ulkx0nbdh"/><path class="tdrgxhknx"/></g></mask></defs><path mask="url(#SVGbSBuC8ZU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:exchange-three"} {...others} />);
}

export default Component;
