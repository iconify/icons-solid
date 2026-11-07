import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czdsxrb2c.css';
import '../../css/e/ewaos-x_y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="czdsxrb2c"/><path class="ewaos-x_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clouds-bold-duotone"} {...others} />);
}

export default Component;
