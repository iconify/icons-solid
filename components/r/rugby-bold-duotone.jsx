import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arcfgd0gf.css';
import '../../css/l/l5modfp0n.css';
import '../../css/p/p_57c1bko.css';
import '../../css/b/b7f-sebqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="arcfgd0gf"/><path class="l5modfp0n"/><path class="p_57c1bko"/><path class="b7f-sebqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rugby-bold-duotone"} {...others} />);
}

export default Component;
