import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/anpy_cbsi.css';
import '../../css/l/ljm5ww87o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="anpy_cbsi"/><path class="ljm5ww87o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:graduation-cap-20-bold"} {...others} />);
}

export default Component;
