import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7d-_dquq.css';
import '../../css/n/n08ozhbbg.css';
import '../../css/z/zcaplciha.css';
import '../../css/f/f25nmwbrc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a7d-_dquq"/><path class="n08ozhbbg"/><path clip-rule="evenodd" class="zcaplciha"/><path class="f25nmwbrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:car-bold"} {...others} />);
}

export default Component;
