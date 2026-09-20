import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2ncdo1bx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c2ncdo1bx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:multiply-circle-fill"} {...others} />);
}

export default Component;
