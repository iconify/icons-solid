import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mc6_pdb7r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mc6_pdb7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:table-cells-merge"} {...others} />);
}

export default Component;
