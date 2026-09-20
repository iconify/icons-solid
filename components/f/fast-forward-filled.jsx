import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ri5tvzkkh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ri5tvzkkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:fast-forward-filled"} {...others} />);
}

export default Component;
