import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqv8b4b-y.css';
import '../../css/t/tnpb5gbvj.css';
import '../../css/y/yxni68tfc.css';
import '../../css/q/q5cgd9bic.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cqv8b4b-y"/><path class="tnpb5gbvj"/><path class="yxni68tfc"/><path class="q5cgd9bic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kilo-code-light"} {...others} />);
}

export default Component;
