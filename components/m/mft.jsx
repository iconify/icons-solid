import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlz2ze66a.css';
import '../../css/n/n4hz257hz.css';
import '../../css/z/zktgoabmd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vlz2ze66a"/><path clip-rule="evenodd" class="n4hz257hz"/><path class="zktgoabmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mft"} {...others} />);
}

export default Component;
