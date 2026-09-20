import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sokgaqver.css';
import '../../css/x/xnv-09bho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sokgaqver"/><path class="xnv-09bho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:entry"} {...others} />);
}

export default Component;
