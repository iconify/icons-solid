import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edziozbwe.css';
import '../../css/x/xiw15t9pv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="edziozbwe"/><path class="xiw15t9pv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:youtube"} {...others} />);
}

export default Component;
