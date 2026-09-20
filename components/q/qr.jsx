import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/th3frzmbn.css';
import '../../css/v/vicwwriiv.css';
import '../../css/l/lgqplm52b.css';
import '../../css/j/js2ykrl4d.css';
import '../../css/c/c3c8skb4r.css';
import '../../css/b/bh__ek2xm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="th3frzmbn"/><path class="vicwwriiv"/><path clip-rule="evenodd" class="lgqplm52b"/><path clip-rule="evenodd" class="js2ykrl4d"/><path class="c3c8skb4r"/><path class="bh__ek2xm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:qr"} {...others} />);
}

export default Component;
