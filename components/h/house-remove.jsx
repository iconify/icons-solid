import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8nzcwb5w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o8nzcwb5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:house-remove"} {...others} />);
}

export default Component;
