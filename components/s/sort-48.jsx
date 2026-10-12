import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ia3776b2n.css';
import '../../css/p/ptrhyzbub.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ia3776b2n"/><path class="ptrhyzbub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sort-48"} {...others} />);
}

export default Component;
