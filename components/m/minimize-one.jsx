import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tujk-ablr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tujk-ablr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:minimize-one"} {...others} />);
}

export default Component;
