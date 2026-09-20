import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zy3n3jbwg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zy3n3jbwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:tool-solid"} {...others} />);
}

export default Component;
