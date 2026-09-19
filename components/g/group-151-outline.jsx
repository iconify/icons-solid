import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nfdi3-zsx.css';
import '../../css/l/lvrxp9btv.css';
import '../../css/j/jkhrtccjt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nfdi3-zsx"/><path class="lvrxp9btv"/><path clip-rule="evenodd" class="jkhrtccjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:group-151-outline"} {...others} />);
}

export default Component;
