import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ktvkgs0ji.css';
import '../../css/k/kiehcdbvr.css';
import '../../css/j/jc2pd1x7x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ktvkgs0ji"/><path class="kiehcdbvr"/><path class="jc2pd1x7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:seek-forward-fifteen"} {...others} />);
}

export default Component;
