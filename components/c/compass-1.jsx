import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elnfgwwuk.css';
import '../../css/u/u5h-mpcos.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="elnfgwwuk"/><circle class="u5h-mpcos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:compass-1"} {...others} />);
}

export default Component;
