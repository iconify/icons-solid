import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6dub5beo.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="j6dub5beo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:timeline"} {...others} />);
}

export default Component;
