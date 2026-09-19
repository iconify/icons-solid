import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/allq33zyo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="allq33zyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:file-blank-outline"} {...others} />);
}

export default Component;
