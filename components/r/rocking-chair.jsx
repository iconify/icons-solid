import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hy1ec1bya.css';
import '../../css/e/et4f-ub-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hy1ec1bya"/><path class="et4f-ub-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:rocking-chair"} {...others} />);
}

export default Component;
