import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9q432bzk.css';
import '../../css/j/jjqv1u30r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x9q432bzk"/><path class="jjqv1u30r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:plain-bold-duotone"} {...others} />);
}

export default Component;
