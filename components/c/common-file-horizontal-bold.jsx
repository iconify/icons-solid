import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7_yf3hsh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o7_yf3hsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:common-file-horizontal-bold"} {...others} />);
}

export default Component;
