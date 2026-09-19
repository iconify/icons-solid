import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgdtsgbcc.css';
import '../../css/v/vj4rr6bnv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fgdtsgbcc"/><path class="vj4rr6bnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:delete"} {...others} />);
}

export default Component;
