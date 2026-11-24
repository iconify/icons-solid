import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw-2n_btc.css';
import '../../css/g/gawagji8w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tw-2n_btc"/><path clip-rule="evenodd" class="gawagji8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:navigation-2-off-filled"} {...others} />);
}

export default Component;
