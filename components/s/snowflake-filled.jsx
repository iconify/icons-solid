import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-yo_-0xx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o-yo_-0xx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:snowflake-filled"} {...others} />);
}

export default Component;
