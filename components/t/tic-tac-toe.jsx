import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b76a-v8pr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b76a-v8pr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:tic-tac-toe"} {...others} />);
}

export default Component;
