import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jykdrib7v.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="jykdrib7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:grooveshark"} {...others} />);
}

export default Component;
