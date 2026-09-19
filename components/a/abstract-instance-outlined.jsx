import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_wt5ub2x.css';
import '../../css/n/n1xy6nh9u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_wt5ub2x"/><circle class="n1xy6nh9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:abstract-instance-outlined"} {...others} />);
}

export default Component;
