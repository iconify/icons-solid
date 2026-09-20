import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ua4o1w2iz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ua4o1w2iz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:send2-filled"} {...others} />);
}

export default Component;
