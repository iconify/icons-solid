import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zykeq5bdg.css';
import '../../css/i/iyo-0bcus.css';
import '../../css/l/l6md27rub.css';
import '../../css/z/z8ghc5bsj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zykeq5bdg"/><path class="iyo-0bcus"/><path class="l6md27rub"/><path class="z8ghc5bsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sleeping-broken"} {...others} />);
}

export default Component;
