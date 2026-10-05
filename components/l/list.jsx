import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/b_3n6ybgo.css';
import '../../css/a/aozhopb2y.css';
import '../../css/f/fhv7l6bvd.css';
import '../../css/e/edjtn2bks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="b_3n6ybgo"/><path class="aozhopb2y"/><path class="fhv7l6bvd"/><path class="edjtn2bks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:list"} {...others} />);
}

export default Component;
