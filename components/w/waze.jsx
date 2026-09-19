import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qt560hjnz.css';
import '../../css/b/bk7elybvl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qt560hjnz"/><path class="bk7elybvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:waze"} {...others} />);
}

export default Component;
