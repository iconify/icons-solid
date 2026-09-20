import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a272yoahj.css';
import '../../css/x/x51ruxbqo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a272yoahj"/><path clip-rule="evenodd" class="x51ruxbqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:four"} {...others} />);
}

export default Component;
