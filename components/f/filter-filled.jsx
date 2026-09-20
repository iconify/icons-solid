import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utxk3l1jo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="utxk3l1jo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:filter-filled"} {...others} />);
}

export default Component;
