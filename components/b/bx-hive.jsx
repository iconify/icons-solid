import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ht9r1ybyd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ht9r1ybyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-hive"} {...others} />);
}

export default Component;
