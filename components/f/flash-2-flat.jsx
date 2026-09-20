import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ya2h1ewyu.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ya2h1ewyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:flash-2-flat"} {...others} />);
}

export default Component;
