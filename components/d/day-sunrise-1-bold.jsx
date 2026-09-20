import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vzfhmjioe.css';
import '../../css/a/amhl2i3ew.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vzfhmjioe"/><path class="amhl2i3ew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:day-sunrise-1-bold"} {...others} />);
}

export default Component;
