import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5i1aouls.css';
import '../../css/f/fktweubsh.css';
import '../../css/e/e39ud6bwf.css';
import '../../css/s/svdy80z7e.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="l5i1aouls"/><circle class="fktweubsh"/><circle class="e39ud6bwf"/><path class="svdy80z7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:pending"} {...others} />);
}

export default Component;
