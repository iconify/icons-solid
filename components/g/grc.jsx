import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ehp6y9b0c.css';
import '../../css/a/ak5ietboi.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="ehp6y9b0c"/><path class="ak5ietboi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:grc"} {...others} />);
}

export default Component;
