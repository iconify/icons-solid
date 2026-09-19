import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2rj_-boj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y2rj_-boj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:iosphotos"} {...others} />);
}

export default Component;
