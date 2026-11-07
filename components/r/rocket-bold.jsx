import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1ywg7b9f.css';
import '../../css/r/rcgsjubiv.css';
import '../../css/y/ym8wn7bnw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y1ywg7b9f"/><path class="rcgsjubiv"/><path clip-rule="evenodd" class="ym8wn7bnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rocket-bold"} {...others} />);
}

export default Component;
