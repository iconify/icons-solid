import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/k_r1rzkra.css';
import '../../css/f/f7q4rrscw.css';
import '../../css/v/v3hm9-n6v.css';
import '../../css/q/qba5bgzqd.css';
import '../../css/l/l1lryzbkl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkgxEnekY"><g class="aql7dnt-u"><path class="k_r1rzkra"/><path clip-rule="evenodd" class="f7q4rrscw"/><path class="v3hm9-n6v"/><path clip-rule="evenodd" class="qba5bgzqd"/><path class="l1lryzbkl"/></g></mask></defs><path mask="url(#SVGkgxEnekY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:balance-two"} {...others} />);
}

export default Component;
