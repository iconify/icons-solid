import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cse8nbblk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cse8nbblk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:sql-full-outer-join"} {...others} />);
}

export default Component;
