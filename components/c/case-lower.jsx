import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/byuwc6cgy.css';
import '../../css/b/bc9n_eqle.css';
import '../../css/o/oh_dgz1af.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="byuwc6cgy"/><circle class="bc9n_eqle"/><circle class="oh_dgz1af"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:case-lower"} {...others} />);
}

export default Component;
