import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lf9v9teof.css';
import '../../css/s/skxfee1fo.css';
import '../../css/b/bmdiq6b8t.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 lf9v9teof"/><path class="clr-i-outline clr-i-outline-path-2 skxfee1fo"/><path class="bmdiq6b8t clr-i-outline clr-i-outline-path-3"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:backup-line"} {...others} />);
}

export default Component;
