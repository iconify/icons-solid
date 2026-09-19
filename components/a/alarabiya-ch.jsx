import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwg_5dfby.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zwg_5dfby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:alarabiya-ch"} {...others} />);
}

export default Component;
