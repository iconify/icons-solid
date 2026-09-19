import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6i4w3bbo.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="a6i4w3bbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:h3-20-solid"} {...others} />);
}

export default Component;
