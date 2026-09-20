import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wbbvttb9i.css';
import '../../css/w/we1tctbye.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wbbvttb9i"/><path class="we1tctbye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:stackoverflow"} {...others} />);
}

export default Component;
