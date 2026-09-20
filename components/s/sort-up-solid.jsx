import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/and361xiy.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="and361xiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:sort-up-solid"} {...others} />);
}

export default Component;
