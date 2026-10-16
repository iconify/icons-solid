import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6_n-55ky.css';
import '../../css/r/r4-rvcapq.css';
import '../../css/g/ggak2qltj.css';
import '../../css/s/sfb8rqn9v.css';
import '../../css/k/ksydp3lsw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p6_n-55ky"/><path class="r4-rvcapq"/><path class="ggak2qltj"/><path class="sfb8rqn9v"/><path class="ksydp3lsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:package-x-48-bold"} {...others} />);
}

export default Component;
