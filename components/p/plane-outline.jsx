import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9uqm8b5n.css';
import '../../css/k/kpfffy3-m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h9uqm8b5n"/><circle class="kpfffy3-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:plane-outline"} {...others} />);
}

export default Component;
