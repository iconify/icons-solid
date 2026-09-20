import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtdsctbtj.css';
import '../../css/w/w6qwevbda.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wtdsctbtj"/><path class="w6qwevbda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:search-error-filled"} {...others} />);
}

export default Component;
