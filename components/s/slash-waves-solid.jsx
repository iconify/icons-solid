import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmk8c0bnw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jmk8c0bnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:slash-waves-solid"} {...others} />);
}

export default Component;
