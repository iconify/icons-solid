import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwqtgebov.css';
import '../../css/q/q5d6wvbhw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wwqtgebov"/><path class="q5d6wvbhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:abl"} {...others} />);
}

export default Component;
