import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/taydys9dc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="taydys9dc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:rune"} {...others} />);
}

export default Component;
