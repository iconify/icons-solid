import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3t8i6bmf.css';
import '../../css/a/aa-24kbsv.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="x3t8i6bmf"/><path class="aa-24kbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:basic-ui-unlink"} {...others} />);
}

export default Component;
