import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uuzv89i-p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uuzv89i-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:hydrant"} {...others} />);
}

export default Component;
