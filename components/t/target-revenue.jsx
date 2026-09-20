import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljsebdbqo.css';
import '../../css/k/kb7eai5rm.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ljsebdbqo"/><path class="kb7eai5rm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:target-revenue"} {...others} />);
}

export default Component;
