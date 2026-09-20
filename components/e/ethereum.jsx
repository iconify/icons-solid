import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/il0u59btn.css';
import '../../css/a/ai9whoirx.css';
import '../../css/a/av0edef4u.css';
import '../../css/l/lxpaeopia.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="il0u59btn"/><path class="ai9whoirx"/><path clip-rule="evenodd" class="av0edef4u"/><path clip-rule="evenodd" class="lxpaeopia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ethereum"} {...others} />);
}

export default Component;
