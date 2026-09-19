import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay8c1wtws.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ay8c1wtws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:homepod-mini"} {...others} />);
}

export default Component;
