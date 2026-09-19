import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0q5nbr5o.css';
import '../../css/e/ebeqjhxfc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="z0q5nbr5o"/><path class="ebeqjhxfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:image-search"} {...others} />);
}

export default Component;
