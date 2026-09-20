import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltow3qbyg.css';

const viewBox = {"width":413,"height":413,"left":-78.5};
const content = `<path class="ltow3qbyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:apache-kafka-dark"} {...others} />);
}

export default Component;
