import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp0cwnbgx.css';
import '../../css/y/y4fef2bqt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gp0cwnbgx"/><path class="y4fef2bqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sofa-bold-duotone"} {...others} />);
}

export default Component;
