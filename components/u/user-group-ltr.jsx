import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yoirqcbtc.css';
import '../../css/o/ojb5ey7sa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yoirqcbtc"/><circle class="ojb5ey7sa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:user-group-ltr"} {...others} />);
}

export default Component;
