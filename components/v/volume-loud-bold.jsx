import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/enqq2_4zj.css';
import '../../css/h/h12fbya6z.css';
import '../../css/k/kn7h3_b3d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="enqq2_4zj"/><path class="h12fbya6z"/><path class="kn7h3_b3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volume-loud-bold"} {...others} />);
}

export default Component;
