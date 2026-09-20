import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3ctc8bln.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g3ctc8bln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:numeric-0-box-multiple"} {...others} />);
}

export default Component;
