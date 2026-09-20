import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qf1449bit.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qf1449bit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:eosdt"} {...others} />);
}

export default Component;
