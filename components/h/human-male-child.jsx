import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdmdb_bci.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pdmdb_bci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:human-male-child"} {...others} />);
}

export default Component;
