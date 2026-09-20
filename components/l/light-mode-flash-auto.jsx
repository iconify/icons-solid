import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0nuqaczh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b0nuqaczh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:light-mode-flash-auto"} {...others} />);
}

export default Component;
