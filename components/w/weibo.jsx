import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/by140xbel.css';
import '../../css/o/ow_ygzbys.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="by140xbel"/><path class="ow_ygzbys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:weibo"} {...others} />);
}

export default Component;
