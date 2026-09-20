import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ynssjob8h.css';
import '../../css/e/eosffmb0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ynssjob8h"/><path class="eosffmb0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-plus"} {...others} />);
}

export default Component;
