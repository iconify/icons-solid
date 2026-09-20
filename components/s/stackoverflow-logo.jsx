import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/othkqgbyg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="othkqgbyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:stackoverflow-logo"} {...others} />);
}

export default Component;
