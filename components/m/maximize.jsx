import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ye3f1bcxd.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ye3f1bcxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:maximize"} {...others} />);
}

export default Component;
