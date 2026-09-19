import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qni966bju.css';
import '../../css/c/c96bn9bfp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGDAWLkdts"><g class="aql7dnt-u"><circle class="qni966bju"/><path class="c96bn9bfp"/></g></mask></defs><path mask="url(#SVGDAWLkdts)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:user-positioning"} {...others} />);
}

export default Component;
