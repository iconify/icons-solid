import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvtb7tb3p.css';
import '../../css/g/gor6sh79f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cvtb7tb3p"/><path class="gor6sh79f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-elo-method-composer"} {...others} />);
}

export default Component;
