import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6plrxovz.css';
import '../../css/o/o8euiibbt.css';
import '../../css/g/g7qf7cb_o.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/n/n-c6of2tv.css';
import '../../css/o/otqin9rdr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c6plrxovz"/><path class="o8euiibbt"/><path class="g7qf7cb_o"/><g class="jn8qy4bru"><path class="n-c6of2tv"/><path class="otqin9rdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:battery"} {...others} />);
}

export default Component;
