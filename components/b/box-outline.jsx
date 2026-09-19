import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gebuh6bxe.css';
import '../../css/i/izniwg9qs.css';
import '../../css/t/thka_lb0g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="box-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="gebuh6bxe"/><path class="izniwg9qs"/><path class="thka_lb0g"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:box-outline"} {...others} />);
}

export default Component;
