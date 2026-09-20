import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aqvkq1msn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aqvkq1msn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:git-pr-draft-fill"} {...others} />);
}

export default Component;
