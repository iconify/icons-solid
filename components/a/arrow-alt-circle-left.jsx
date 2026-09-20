import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rslkvhswy.css';
import '../../css/u/ug_dfdboc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rslkvhswy"/><path class="ug_dfdboc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:arrow-alt-circle-left"} {...others} />);
}

export default Component;
