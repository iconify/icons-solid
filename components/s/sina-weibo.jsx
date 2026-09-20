import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jrrsb2b9x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jrrsb2b9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sina-weibo"} {...others} />);
}

export default Component;
