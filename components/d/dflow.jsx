import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ji2qzhbit.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/y/y243fzwzh.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGYvjPKcuU" x1="343.16" x2="5.951" y1="238.775" y2="-1.029" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ji2qzhbit"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGYvjPKcuU)" class="y243fzwzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dflow"} {...others} />);
}

export default Component;
