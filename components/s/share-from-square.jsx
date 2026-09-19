import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b6b1et9wp.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="b6b1et9wp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-regular:share-from-square"} {...others} />);
}

export default Component;
