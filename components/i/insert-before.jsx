import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgc7y8xwr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dgc7y8xwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:insert-before"} {...others} />);
}

export default Component;
