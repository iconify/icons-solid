import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8v-evrrq.css';
import '../../css/d/d9ypmmcan.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="o8v-evrrq"/><path class="d9ypmmcan"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:hand-awesome"} {...others} />);
}

export default Component;
