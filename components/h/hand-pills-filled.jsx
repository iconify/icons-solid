import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6j4vc5th.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a6j4vc5th"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:hand-pills-filled"} {...others} />);
}

export default Component;
