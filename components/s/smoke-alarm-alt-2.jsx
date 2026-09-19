import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/au88_79si.css';
import '../../css/x/x76_u45ql.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="au88_79si"/><path class="x76_u45ql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:smoke-alarm-alt-2"} {...others} />);
}

export default Component;
