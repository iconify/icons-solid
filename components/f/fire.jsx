import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8wpkjq1k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q8wpkjq1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:fire"} {...others} />);
}

export default Component;
