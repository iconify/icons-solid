import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebyxg8bpj.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/r/rt40puy8t.css';
import '../../css/m/m8ow94bvr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ebyxg8bpj"/><g class="xtpeb-edw"><path class="rt40puy8t"/><path class="m8ow94bvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:city-bold-duotone"} {...others} />);
}

export default Component;
