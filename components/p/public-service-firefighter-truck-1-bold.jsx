import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-tiuxvdv.css';
import '../../css/o/ousb7cb3z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a-tiuxvdv"/><path class="ousb7cb3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:public-service-firefighter-truck-1-bold"} {...others} />);
}

export default Component;
