import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/am_cqm3ok.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="am_cqm3ok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:envelope-solid"} {...others} />);
}

export default Component;
