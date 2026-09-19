import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1mt0n45y.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="a1mt0n45y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:clock"} {...others} />);
}

export default Component;
