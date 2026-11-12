import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yseymk-7a.css';
import '../../css/l/lt60qtbco.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yseymk-7a"/><path class="lt60qtbco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mongodb-dark"} {...others} />);
}

export default Component;
