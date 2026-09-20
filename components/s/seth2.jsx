import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sthgrmhos.css';
import '../../css/p/pcus4nb_z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sthgrmhos"/><path class="pcus4nb_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:seth2"} {...others} />);
}

export default Component;
