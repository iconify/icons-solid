import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0ycxjbta.css';
import '../../css/k/kqw88ab_z.css';
import '../../css/n/n0u6-2buy.css';

const viewBox = {"width":36,"height":36};
const content = `<ellipse class="t0ycxjbta"/><path class="kqw88ab_z"/><path class="n0u6-2buy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:employee-group-solid"} {...others} />);
}

export default Component;
