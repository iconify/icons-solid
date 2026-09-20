import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qq1x5_nht.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="qq1x5_nht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:hand-16"} {...others} />);
}

export default Component;
