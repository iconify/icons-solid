import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cg24lgbwn.css';
import '../../css/u/ut59o-b4c.css';
import '../../css/a/acq_ddcuz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cg24lgbwn"/><path class="ut59o-b4c"/><path class="acq_ddcuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:white"} {...others} />);
}

export default Component;
