import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktn4qlgbd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ktn4qlgbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:book-read-line"} {...others} />);
}

export default Component;
