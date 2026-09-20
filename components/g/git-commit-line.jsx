import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itz2mac9q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="itz2mac9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:git-commit-line"} {...others} />);
}

export default Component;
