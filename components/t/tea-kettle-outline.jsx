import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zt-78blmq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zt-78blmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:tea-kettle-outline"} {...others} />);
}

export default Component;
