import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adexpl72i.css';
import '../../css/p/pw0h5xb-x.css';
import '../../css/a/arpc54blb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGU7xZCb3N"><g class="adexpl72i"><path class="pw0h5xb-x"/><circle class="arpc54blb"/></g></mask></defs><path mask="url(#SVGU7xZCb3N)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:video-one"} {...others} />);
}

export default Component;
