import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny-3uobra.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ny-3uobra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:clipboard-16-solid"} {...others} />);
}

export default Component;
