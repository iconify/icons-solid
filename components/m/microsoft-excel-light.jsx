import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvmnxt6ft.css';
import '../../css/m/mkor83bnq.css';
import '../../css/m/m8r9zubhb.css';
import '../../css/y/y1mciqk_m.css';
import '../../css/d/dbqjt5bjh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hvmnxt6ft"/><path class="mkor83bnq"/><path class="m8r9zubhb"/><path class="y1mciqk_m"/><path class="dbqjt5bjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-excel-light"} {...others} />);
}

export default Component;
