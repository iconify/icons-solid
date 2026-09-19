import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0si7bc9c.css';
import '../../css/r/r-xntnbat.css';
import '../../css/l/lq-q1ngth.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="m0si7bc9c"/><rect class="r-xntnbat"/><path class="lq-q1ngth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:align-vertical-justify-center-filled"} {...others} />);
}

export default Component;
