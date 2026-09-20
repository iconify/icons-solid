import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ko59n4btr.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<path class="ko59n4btr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:forward-square-f"} {...others} />);
}

export default Component;
