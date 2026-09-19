import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cm0pbmbno.css';
import '../../css/o/o_b_sl5zu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cm0pbmbno"/><path class="o_b_sl5zu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:ansible-lint"} {...others} />);
}

export default Component;
