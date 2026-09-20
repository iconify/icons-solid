import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/b/bcls_5els.css';
import '../../css/o/oav-gwbei.css';
import '../../css/d/dhn614b5c.css';
import '../../css/f/fp8j8220r.css';
import '../../css/b/bjedgqjej.css';
import '../../css/a/at50dvrmb.css';
import '../../css/n/n77e7rb2o.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><path class="bcls_5els"/><path class="oav-gwbei"/><path class="dhn614b5c"/><path class="fp8j8220r"/><rect paint-order="stroke fill markers" class="bjedgqjej"/><rect paint-order="stroke fill markers" class="at50dvrmb"/><rect paint-order="stroke fill markers" class="n77e7rb2o"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-jersey"} {...others} />);
}

export default Component;
