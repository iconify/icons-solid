import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h9hcsnbsy.css';
import '../../css/k/kls3_nbwn.css';
import '../../css/u/ut31g4brz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGnrGa7bhS"><g class="aql7dnt-u"><path class="h9hcsnbsy"/><path class="kls3_nbwn"/><path class="ut31g4brz"/></g></mask></defs><path mask="url(#SVGnrGa7bhS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:tent-banner"} {...others} />);
}

export default Component;
