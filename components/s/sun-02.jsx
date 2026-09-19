import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o7t96_w7i.css';
import '../../css/e/eqwhii6av.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="o7t96_w7i"/><path class="eqwhii6av"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sun-02"} {...others} />);
}

export default Component;
