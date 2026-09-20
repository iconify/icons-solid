import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rg59nlbhx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rg59nlbhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:number-seven-circle-bold"} {...others} />);
}

export default Component;
