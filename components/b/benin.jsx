import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t84zq8bbo.css';
import '../../css/q/qhzt0zrxn.css';
import '../../css/u/uaukdmb7p.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="t84zq8bbo"/><path class="qhzt0zrxn"/><path class="uaukdmb7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:benin"} {...others} />);
}

export default Component;
