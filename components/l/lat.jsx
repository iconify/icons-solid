import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ko6i3z5qf.css';
import '../../css/o/oowixtbky.css';
import '../../css/t/tggvt9bno.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ko6i3z5qf"/><path class="oowixtbky"/><path class="tggvt9bno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:lat"} {...others} />);
}

export default Component;
