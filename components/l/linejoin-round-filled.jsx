import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kb-9x3bjn.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="kb-9x3bjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:linejoin-round-filled"} {...others} />);
}

export default Component;
