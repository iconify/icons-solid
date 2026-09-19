import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jezndibaa.css';
import '../../css/b/bx73xdbxr.css';
import '../../css/j/jzyh32b9m.css';
import '../../css/d/d-8a58b0f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jezndibaa"/><path class="bx73xdbxr"/><path class="jzyh32b9m"/><path class="d-8a58b0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:izakayalantern"} {...others} />);
}

export default Component;
