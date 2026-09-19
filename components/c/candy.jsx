import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/d/dvcapvbcu.css';
import '../../css/m/met-ksu1r.css';
import '../../css/p/peimmofsp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWrHFzcHE"><g class="s9cl3zbei"><circle class="dvcapvbcu"/><path class="met-ksu1r"/><path class="peimmofsp"/></g></mask></defs><path mask="url(#SVGWrHFzcHE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:candy"} {...others} />);
}

export default Component;
