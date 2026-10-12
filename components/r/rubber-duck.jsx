import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hbh4ajb-s.css';
import '../../css/z/zm25tjttz.css';
import '../../css/l/lgpd2ygbz.css';
import '../../css/c/c8020z84q.css';
import '../../css/j/j1p8y9cko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hbh4ajb-s"/><path clip-rule="evenodd" class="zm25tjttz"/><path class="lgpd2ygbz"/><path class="c8020z84q"/><path class="j1p8y9cko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:rubber-duck"} {...others} />);
}

export default Component;
