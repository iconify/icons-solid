import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cs0839n8x.css';
import '../../css/t/ta7x8sbgt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cs0839n8x"/><path class="ta7x8sbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:catalog-publish"} {...others} />);
}

export default Component;
