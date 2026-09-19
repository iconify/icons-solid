import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/y/ytqv15fxv.css';
import '../../css/w/wqq601e3z.css';
import '../../css/y/yvh1k6bif.css';
import '../../css/i/i-558ufoo.css';
import '../../css/o/oy5_uuste.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgLO3nckm"><g class="wwvp95byt"><path class="ytqv15fxv"/><path class="wqq601e3z"/><path class="yvh1k6bif"/><path class="i-558ufoo"/><path class="oy5_uuste"/></g></mask></defs><path mask="url(#SVGgLO3nckm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:dribble"} {...others} />);
}

export default Component;
