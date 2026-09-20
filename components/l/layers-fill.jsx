import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdkgnbbwr.css';
import '../../css/l/lcfo21bnz.css';
import '../../css/k/kfdgnyb-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hdkgnbbwr"/><path clip-rule="evenodd" class="lcfo21bnz"/><path clip-rule="evenodd" class="kfdgnyb-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:layers-fill"} {...others} />);
}

export default Component;
