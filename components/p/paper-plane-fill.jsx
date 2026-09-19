import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuu7943dm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cuu7943dm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:paper-plane-fill"} {...others} />);
}

export default Component;
