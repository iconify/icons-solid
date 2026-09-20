import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svyv33w3v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="svyv33w3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:shopping-clothes"} {...others} />);
}

export default Component;
