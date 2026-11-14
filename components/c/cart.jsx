import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bjl2bebha.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/z/zbq9iiu1h.css';
import '../../css/g/gc95_g7tz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bjl2bebha"/><g class="mc2zb0bvp"><circle class="zbq9iiu1h"/><circle class="gc95_g7tz"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:cart"} {...others} />);
}

export default Component;
