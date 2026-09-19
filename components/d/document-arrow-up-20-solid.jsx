import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m18kcqbpx.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="m18kcqbpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:document-arrow-up-20-solid"} {...others} />);
}

export default Component;
