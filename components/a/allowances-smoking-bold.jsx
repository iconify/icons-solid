import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fu4coba6u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fu4coba6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:allowances-smoking-bold"} {...others} />);
}

export default Component;
