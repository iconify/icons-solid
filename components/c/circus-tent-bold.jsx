import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqj66qbyb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cqj66qbyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:circus-tent-bold"} {...others} />);
}

export default Component;
