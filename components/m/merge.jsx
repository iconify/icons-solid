import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_7t4ubcy.css';
import '../../css/d/dbpvorrsy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n_7t4ubcy"/><path class="dbpvorrsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:merge"} {...others} />);
}

export default Component;
