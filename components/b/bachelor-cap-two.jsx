import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/m/m-pviab0g.css';
import '../../css/g/g2o69q94f.css';
import '../../css/y/ylmo4wmnt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="m-pviab0g"/><path class="g2o69q94f"/><path class="ylmo4wmnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bachelor-cap-two"} {...others} />);
}

export default Component;
