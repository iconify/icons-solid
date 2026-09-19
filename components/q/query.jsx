import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7xu5rhoq.css';
import '../../css/u/uqr-rtqnv.css';
import '../../css/r/rbwpa9bmd.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="z7xu5rhoq"/><path class="uqr-rtqnv"/><path class="rbwpa9bmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:query"} {...others} />);
}

export default Component;
