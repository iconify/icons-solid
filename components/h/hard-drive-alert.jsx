import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6z6xpbyh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q6z6xpbyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:hard-drive-alert"} {...others} />);
}

export default Component;
