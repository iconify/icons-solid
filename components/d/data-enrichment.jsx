import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1bw5jbyk.css';
import '../../css/x/x8r3bo3uc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="m1bw5jbyk"/><path class="x8r3bo3uc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:data-enrichment"} {...others} />);
}

export default Component;
