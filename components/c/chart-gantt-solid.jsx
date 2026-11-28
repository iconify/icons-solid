import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1zs8h7wv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g1zs8h7wv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chart-gantt-solid"} {...others} />);
}

export default Component;
