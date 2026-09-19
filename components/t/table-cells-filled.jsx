import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jk91yiz0v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jk91yiz0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:table-cells-filled"} {...others} />);
}

export default Component;
