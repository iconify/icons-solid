import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fq22e_95b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fq22e_95b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:ko-fi"} {...others} />);
}

export default Component;
