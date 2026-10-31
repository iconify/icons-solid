import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a5i76hb6u.css';
import '../../css/c/cpomvobiw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a5i76hb6u"/><path class="cpomvobiw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:currency-bitcoin-duocolor-round"} {...others} />);
}

export default Component;
