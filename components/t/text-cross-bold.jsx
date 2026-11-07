import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti6p48bml.css';
import '../../css/a/ahs3192tr.css';
import '../../css/o/ortpaq31n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ti6p48bml"/><path class="ahs3192tr"/><path class="ortpaq31n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-cross-bold"} {...others} />);
}

export default Component;
