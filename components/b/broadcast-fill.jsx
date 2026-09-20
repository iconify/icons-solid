import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yc_hokbxm.css';
import '../../css/t/tknqpubcv.css';
import '../../css/l/laiohca0l.css';
import '../../css/f/fvzn7jbwv.css';
import '../../css/o/ovw8h7b-w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yc_hokbxm"/><path class="tknqpubcv"/><path class="laiohca0l"/><path class="fvzn7jbwv"/><path class="ovw8h7b-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:broadcast-fill"} {...others} />);
}

export default Component;
