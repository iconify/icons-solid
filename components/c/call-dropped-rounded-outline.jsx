import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zo0xsojdd.css';
import '../../css/o/o4sar_bie.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zo0xsojdd"/><path clip-rule="evenodd" class="o4sar_bie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:call-dropped-rounded-outline"} {...others} />);
}

export default Component;
