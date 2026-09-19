import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxn_qk47p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rxn_qk47p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:signal-zero"} {...others} />);
}

export default Component;
