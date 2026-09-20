import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7ejribor.css';
import '../../css/u/urh8tubap.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r7ejribor"/><path class="urh8tubap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:dose"} {...others} />);
}

export default Component;
