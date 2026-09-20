import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfax0i5fy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cfax0i5fy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:mouse"} {...others} />);
}

export default Component;
