import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jd0cbac6n.css';
import '../../css/y/yaf-d03di.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jd0cbac6n"/><path class="yaf-d03di"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:martial-arts-swords-bold"} {...others} />);
}

export default Component;
