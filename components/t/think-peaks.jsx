import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_660sb8w.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="t_660sb8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:think-peaks"} {...others} />);
}

export default Component;
