import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6j0c_bty.css';
import '../../css/s/soci7ctjl.css';
import '../../css/a/a2at6rjqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q6j0c_bty"/><circle class="soci7ctjl"/><path class="a2at6rjqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:color-palette-outline"} {...others} />);
}

export default Component;
