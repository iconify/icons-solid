import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/robwd6bgc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="robwd6bgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:text-color"} {...others} />);
}

export default Component;
