import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpmb-7exi.css';
import '../../css/b/bv_qqwbga.css';
import '../../css/a/aeiewjq8e.css';
import '../../css/a/a9i438byf.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/l/lyqbz3bix.css';
import '../../css/g/g8a0s2nql.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="tpmb-7exi"/><path class="bv_qqwbga"/><path class="aeiewjq8e"/><path class="a9i438byf"/><g class="jn8qy4bru"><path class="lyqbz3bix"/><path class="g8a0s2nql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:rabbit"} {...others} />);
}

export default Component;
