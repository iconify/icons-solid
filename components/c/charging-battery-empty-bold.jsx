import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aovr4abks.css';
import '../../css/o/o8687p-5i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aovr4abks"/><path class="o8687p-5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:charging-battery-empty-bold"} {...others} />);
}

export default Component;
