import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2eqpfbnp.css';

const viewBox = {"width":389,"height":754};
const content = `<path class="n2eqpfbnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:j-upper-case"} {...others} />);
}

export default Component;
