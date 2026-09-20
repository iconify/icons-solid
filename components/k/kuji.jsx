import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3m48pb3x.css';
import '../../css/t/tcklekb-k.css';
import '../../css/f/fr78w7boo.css';
import '../../css/j/j4gjthbnr.css';
import '../../css/t/tatq48slt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w3m48pb3x"/><path class="tcklekb-k"/><path class="fr78w7boo"/><path class="j4gjthbnr"/><path class="tatq48slt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:kuji"} {...others} />);
}

export default Component;
