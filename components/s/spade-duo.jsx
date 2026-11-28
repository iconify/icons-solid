import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/znq7qdb9f.css';
import '../../css/a/ak0d4abdn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary znq7qdb9f"/><path class="ak0d4abdn primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:spade-duo"} {...others} />);
}

export default Component;
