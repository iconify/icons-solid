import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j5kq2dbji.css';
import '../../css/j/jl00xv8ke.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j5kq2dbji"/><path class="jl00xv8ke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:id-card-lanyard"} {...others} />);
}

export default Component;
