import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spmf_h7bn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="spmf_h7bn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:inductive-automation"} {...others} />);
}

export default Component;
