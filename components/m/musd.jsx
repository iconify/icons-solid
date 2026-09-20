import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tj_u7vbcr.css';
import '../../css/x/xgapgabzz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tj_u7vbcr"/><path class="xgapgabzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:musd"} {...others} />);
}

export default Component;
