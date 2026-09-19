import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fkq5-0cbt.css';

const viewBox = {"width":1025,"height":770};
const content = `<path class="fkq5-0cbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:panoramaalt"} {...others} />);
}

export default Component;
