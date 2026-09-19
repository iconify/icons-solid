import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tu6haob4c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tu6haob4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:twitter-fill-16"} {...others} />);
}

export default Component;
