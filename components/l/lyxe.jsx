import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9cxv5r5f.css';
import '../../css/s/syrvrjq4y.css';
import '../../css/t/tcbpmlgll.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i9cxv5r5f"/><path class="syrvrjq4y"/><path class="tcbpmlgll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:lyxe"} {...others} />);
}

export default Component;
