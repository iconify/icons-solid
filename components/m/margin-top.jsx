import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gs3ov8moq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gs3ov8moq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:margin-top"} {...others} />);
}

export default Component;
