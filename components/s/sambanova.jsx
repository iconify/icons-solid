import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ha-ru_sez.css';
import '../../css/z/zuyihimme.css';
import '../../css/o/ob81ctbsn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ha-ru_sez"/><path class="zuyihimme"/><path class="ob81ctbsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sambanova"} {...others} />);
}

export default Component;
