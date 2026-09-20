import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qgqv1ufxo.css';
import '../../css/s/sjdg-k99j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="icon-tabler nrj6p8qat"><rect class="qgqv1ufxo"/><rect class="sjdg-k99j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:pause"} {...others} />);
}

export default Component;
