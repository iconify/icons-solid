import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eebag5dgs.css';
import '../../css/v/vlmk0rb9q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eebag5dgs"/><path class="vlmk0rb9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:banknoteyen"} {...others} />);
}

export default Component;
