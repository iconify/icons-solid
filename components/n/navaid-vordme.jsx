import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e39ud6bwf.css';
import '../../css/n/nzx5alglg.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="e39ud6bwf"/><path class="nzx5alglg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:navaid-vordme"} {...others} />);
}

export default Component;
