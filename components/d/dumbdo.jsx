import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jl0w_em6f.css';
import '../../css/q/qeuinobue.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="jl0w_em6f"/><path class="qeuinobue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dumbdo"} {...others} />);
}

export default Component;
