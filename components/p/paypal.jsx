import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvbn4vepc.css';
import '../../css/k/kq37wbc8g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bvbn4vepc"/><path class="kq37wbc8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:paypal"} {...others} />);
}

export default Component;
