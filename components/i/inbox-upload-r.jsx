import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/h/h629go4ys.css';
import '../../css/u/uc8kr5rtb.css';
import '../../css/y/yeq7r9s-w.css';
import '../../css/b/bmn48cc0p.css';
import '../../css/e/e95ct9bzp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="h629go4ys"/><path class="uc8kr5rtb"/><path class="yeq7r9s-w"/><path class="bmn48cc0p"/><path class="e95ct9bzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:inbox-upload-r"} {...others} />);
}

export default Component;
