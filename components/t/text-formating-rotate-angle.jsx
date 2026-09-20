import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rjoxvcbpj.css';
import '../../css/c/czfcabbog.css';
import '../../css/t/tcjl3pbdk.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rjoxvcbpj"/><path class="czfcabbog"/><path class="tcjl3pbdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:text-formating-rotate-angle"} {...others} />);
}

export default Component;
