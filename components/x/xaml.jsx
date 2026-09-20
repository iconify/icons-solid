import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aef3ixbes.css';
import '../../css/c/c2c3p-b5s.css';
import '../../css/z/zm33ygepl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="aef3ixbes"/><path class="c2c3p-b5s"/><path class="zm33ygepl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:xaml"} {...others} />);
}

export default Component;
