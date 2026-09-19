import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aigqoeosf.css';
import '../../css/l/lzd14vb-z.css';

const viewBox = {"width":16,"height":13};
const content = `<path class="aigqoeosf"/><path class="lzd14vb-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:volumeup"} {...others} />);
}

export default Component;
