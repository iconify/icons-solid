import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a1o8lbc_h.css';
import '../../css/x/x7tsuvpdy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a1o8lbc_h"/><path class="x7tsuvpdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:pig-money"} {...others} />);
}

export default Component;
