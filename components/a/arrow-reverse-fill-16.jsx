import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq3d8hulp.css';
import '../../css/i/izk0irbfh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="eq3d8hulp"/><path class="izk0irbfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:arrow-reverse-fill-16"} {...others} />);
}

export default Component;
