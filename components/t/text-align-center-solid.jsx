import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zg8ef5bno.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zg8ef5bno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:text-align-center-solid"} {...others} />);
}

export default Component;
