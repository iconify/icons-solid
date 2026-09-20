import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6i-u4buk.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<path class="e6i-u4buk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:movie"} {...others} />);
}

export default Component;
