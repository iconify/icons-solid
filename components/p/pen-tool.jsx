import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p4pwxrbiv.css';
import '../../css/s/snp4gwbyg.css';
import '../../css/c/c7q11z5lw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p4pwxrbiv"/><path class="snp4gwbyg"/><circle class="c7q11z5lw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:pen-tool"} {...others} />);
}

export default Component;
