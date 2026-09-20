import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9uvf3b6q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e9uvf3b6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-align-offset-left-fill"} {...others} />);
}

export default Component;
