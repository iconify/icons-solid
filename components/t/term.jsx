import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfn4nc9vy.css';
import '../../css/f/fktweubsh.css';
import '../../css/e/e39ud6bwf.css';
import '../../css/l/l5i1aouls.css';
import '../../css/d/dql61db7n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cfn4nc9vy"/><circle class="fktweubsh"/><circle class="e39ud6bwf"/><circle class="l5i1aouls"/><path class="dql61db7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:term"} {...others} />);
}

export default Component;
