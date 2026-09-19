import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxwa51bzx.css';
import '../../css/l/l7ztl2cyr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gxwa51bzx"/><path class="l7ztl2cyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gridicons:create"} {...others} />);
}

export default Component;
