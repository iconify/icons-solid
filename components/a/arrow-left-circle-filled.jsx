import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojig1mf8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ojig1mf8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:arrow-left-circle-filled"} {...others} />);
}

export default Component;
