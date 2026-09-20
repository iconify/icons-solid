import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kszoi5bnf.css';
import '../../css/v/vt74m5b-v.css';
import '../../css/j/jmbmabbpr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kszoi5bnf"/><path class="vt74m5b-v"/><path class="jmbmabbpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:western-digital"} {...others} />);
}

export default Component;
