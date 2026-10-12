import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jsj3crtht.css';
import '../../css/u/ue8gdp54l.css';
import '../../css/f/fqjqblaab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jsj3crtht"/><path class="ue8gdp54l"/><path class="fqjqblaab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pen-nib-plus"} {...others} />);
}

export default Component;
