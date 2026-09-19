import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h72we6b4o.css';
import '../../css/j/jycc3kbae.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="h72we6b4o"/><path class="jycc3kbae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:trash"} {...others} />);
}

export default Component;
