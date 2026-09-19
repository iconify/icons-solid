import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/c/c0-gdx3un.css';
import '../../css/c/ca124pbio.css';
import '../../css/x/x3eaoq7hh.css';
import '../../css/v/vowpdubpy.css';
import '../../css/l/lnww7ob_n.css';
import '../../css/s/sree4566v.css';
import '../../css/d/dq88awj0t.css';
import '../../css/g/gd7yjtbeu.css';
import '../../css/s/snpv7ndnn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><rect class="c0-gdx3un"/><path class="ca124pbio"/><path class="x3eaoq7hh"/><path class="vowpdubpy"/><path class="lnww7ob_n"/><path class="sree4566v"/><circle class="dq88awj0t"/><path class="gd7yjtbeu"/><path class="snpv7ndnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:medication-time"} {...others} />);
}

export default Component;
