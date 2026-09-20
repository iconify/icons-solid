import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfb0ibcol.css';
import '../../css/o/oov6ojd_g.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="lfb0ibcol"/><path class="oov6ojd_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:protection"} {...others} />);
}

export default Component;
