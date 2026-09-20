import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfkh3qbae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qfkh3qbae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uis:shield-plus"} {...others} />);
}

export default Component;
