import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmjay1pmh.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="bmjay1pmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:search-plus"} {...others} />);
}

export default Component;
