import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rjnz9-bjl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rjnz9-bjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:cloud-computer"} {...others} />);
}

export default Component;
