import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o6e41qzlc.css';
import '../../css/d/da__84bnj.css';
import '../../css/g/glcxrb4ii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o6e41qzlc"/><path class="da__84bnj"/><path class="glcxrb4ii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:car-turbine"} {...others} />);
}

export default Component;
