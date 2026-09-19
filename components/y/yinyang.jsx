import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kyxbr6bpc.css';
import '../../css/e/ekqn6zq5x.css';
import '../../css/g/gb2niytlq.css';
import '../../css/v/v5ixobbbe.css';
import '../../css/p/p9jro9cez.css';
import '../../css/l/lge4vgk-w.css';
import '../../css/d/d4b9w3xti.css';

const viewBox = {"width":100,"height":100};
const content = `<circle class="kyxbr6bpc"/><path class="ekqn6zq5x"/><path class="gb2niytlq"/><circle class="v5ixobbbe"/><circle class="p9jro9cez"/><circle class="lge4vgk-w"/><circle class="d4b9w3xti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:yinyang"} {...others} />);
}

export default Component;
