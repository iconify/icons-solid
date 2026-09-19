import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u3nyuyb1c.css';
import '../../css/z/zduxe50yu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="u3nyuyb1c"/><path class="zduxe50yu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:gift"} {...others} />);
}

export default Component;
