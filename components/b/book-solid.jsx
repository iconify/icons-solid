import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpunj9qsv.css';
import '../../css/d/dzeier91r.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="vpunj9qsv"/><path clip-rule="evenodd" class="dzeier91r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:book-solid"} {...others} />);
}

export default Component;
