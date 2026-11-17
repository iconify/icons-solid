import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/x/x3z6ypblj.css';
import '../../css/j/jqbgtl3yn.css';
import '../../css/l/lns-4nbyt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="x3z6ypblj"/><path class="jqbgtl3yn"/><path class="lns-4nbyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:captions"} {...others} />);
}

export default Component;
