import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/al9z_qb4r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="al9z_qb4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:square-medium-outline"} {...others} />);
}

export default Component;
