import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygb5ynbry.css';
import '../../css/v/v4qkmnlcy.css';
import '../../css/a/a-vs3_0vm.css';
import '../../css/z/zcnczmjty.css';
import '../../css/z/zh8221lvv.css';
import '../../css/g/gapgxrbjo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ygb5ynbry"/><path class="v4qkmnlcy"/><path class="a-vs3_0vm"/><path class="zcnczmjty"/><path class="zh8221lvv"/><path class="gapgxrbjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:share-circle-bold"} {...others} />);
}

export default Component;
