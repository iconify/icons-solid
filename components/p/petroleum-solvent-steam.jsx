import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lqkvepb0m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lqkvepb0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:petroleum-solvent-steam"} {...others} />);
}

export default Component;
