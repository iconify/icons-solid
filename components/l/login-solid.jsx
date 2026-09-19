import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4nt_319i.css';
import '../../css/t/tv2_2htnq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g4nt_319i"/><path class="tv2_2htnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:login-solid"} {...others} />);
}

export default Component;
