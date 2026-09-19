import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ez_yp4b6r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ez_yp4b6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:cloud-drizzle"} {...others} />);
}

export default Component;
