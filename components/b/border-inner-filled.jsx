import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxo__5f1j.css';
import '../../css/u/uq4zqzbch.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nxo__5f1j"/><path class="uq4zqzbch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:border-inner-filled"} {...others} />);
}

export default Component;
