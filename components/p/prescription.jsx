import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/q/q_fzk6ijs.css';
import '../../css/v/vb9_1lbgt.css';
import '../../css/w/w64ndbcxx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHYfQmdvP"><g class="s9cl3zbei"><path clip-rule="evenodd" class="q_fzk6ijs"/><path class="vb9_1lbgt"/><path class="w64ndbcxx"/></g></mask></defs><path mask="url(#SVGHYfQmdvP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:prescription"} {...others} />);
}

export default Component;
