import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bva6fdcpy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bva6fdcpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:user-xmark"} {...others} />);
}

export default Component;
