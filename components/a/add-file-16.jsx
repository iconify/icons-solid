import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwhvqne3w.css';
import '../../css/j/jheuc51zq.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="mwhvqne3w"/><path class="jheuc51zq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:add-file-16"} {...others} />);
}

export default Component;
