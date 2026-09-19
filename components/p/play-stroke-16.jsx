import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hcx97i56l.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hcx97i56l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:play-stroke-16"} {...others} />);
}

export default Component;
