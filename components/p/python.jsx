import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxmbj9awl.css';
import '../../css/c/cv0y2ubog.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jxmbj9awl"/><path class="cv0y2ubog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:python"} {...others} />);
}

export default Component;
