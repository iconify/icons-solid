import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ci_yrdbbn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ci_yrdbbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:swimming-pool-stairs-bold"} {...others} />);
}

export default Component;
