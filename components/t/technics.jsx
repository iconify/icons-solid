import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ugl89-lzx.css';
import '../../css/a/ardjzjb-d.css';
import '../../css/p/palc4vbjx.css';
import '../../css/k/krw19nbxw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ugl89-lzx"/><path class="ardjzjb-d"/><path class="palc4vbjx"/><path class="krw19nbxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:technics"} {...others} />);
}

export default Component;
