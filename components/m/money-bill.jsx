import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyb7ezbvr.css';
import '../../css/g/g_zlf0bqh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jyb7ezbvr"/><circle class="g_zlf0bqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:money-bill"} {...others} />);
}

export default Component;
