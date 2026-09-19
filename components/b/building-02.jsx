import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n22q7k0rb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n22q7k0rb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:building-02"} {...others} />);
}

export default Component;
