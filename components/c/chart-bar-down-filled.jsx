import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgpkd5u5b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cgpkd5u5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:chart-bar-down-filled"} {...others} />);
}

export default Component;
