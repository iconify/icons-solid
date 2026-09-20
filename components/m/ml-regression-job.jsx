import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6-dp9v5j.css';
import '../../css/z/z7hf2lnoo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="t6-dp9v5j"/><path class="ouiIcon__fillSecondary z7hf2lnoo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:ml-regression-job"} {...others} />);
}

export default Component;
