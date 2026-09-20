import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zeaf2n6lm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zeaf2n6lm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:pregnancy-sperm-1"} {...others} />);
}

export default Component;
