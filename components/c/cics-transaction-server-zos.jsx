import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr55nlbza.css';
import '../../css/n/n79xfpb3k.css';
import '../../css/b/b65gtabis.css';
import '../../css/y/yyvrhuu2d.css';
import '../../css/j/jyufl3bad.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="tr55nlbza"/><path class="n79xfpb3k"/><path class="b65gtabis"/><circle class="yyvrhuu2d"/><path class="jyufl3bad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cics-transaction-server-zos"} {...others} />);
}

export default Component;
