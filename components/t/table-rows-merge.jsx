import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7t4c_ylw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g7t4c_ylw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:table-rows-merge"} {...others} />);
}

export default Component;
