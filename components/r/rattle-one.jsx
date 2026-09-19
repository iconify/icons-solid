import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/c/c427p_bvc.css';
import '../../css/l/lm8wm8y6h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG545pnVmb"><g class="aql7dnt-u"><circle transform="rotate(40 29.463 16.989)" class="c427p_bvc"/><path class="lm8wm8y6h"/></g></mask></defs><path mask="url(#SVG545pnVmb)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:rattle-one"} {...others} />);
}

export default Component;
