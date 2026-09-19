import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/ec9oh6sok.css';
import '../../css/i/io9bucc4u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="ec9oh6sok"/><path class="io9bucc4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:baby-car-seat"} {...others} />);
}

export default Component;
