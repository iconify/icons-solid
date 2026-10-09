import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9wv786kf.css';
import '../../css/j/jr0li4tsj.css';
import '../../css/x/x9t4ydb-d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o9wv786kf"/><path class="jr0li4tsj"/><path class="x9t4ydb-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:blueprint-48"} {...others} />);
}

export default Component;
