import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/smv78gb2a.css';
import '../../css/g/gdr6p71vl.css';
import '../../css/a/a5n3-3bfp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="n1lsf0bnc"><path class="smv78gb2a"/><path class="gdr6p71vl"/><path class="a5n3-3bfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:maid"} {...others} />);
}

export default Component;
