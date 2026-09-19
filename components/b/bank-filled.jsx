import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6mz_vjes.css';
import '../../css/c/c441vmfnl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v6mz_vjes"/><path clip-rule="evenodd" class="c441vmfnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:bank-filled"} {...others} />);
}

export default Component;
