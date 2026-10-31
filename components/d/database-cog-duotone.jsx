import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sl_fohx5d.css';
import '../../css/s/scv9d7bem.css';
import '../../css/a/a0o4ub92n.css';
import '../../css/u/ucogdbb3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sl_fohx5d"/><path class="scv9d7bem"/><path class="a0o4ub92n"/><path class="ucogdbb3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:database-cog-duotone"} {...others} />);
}

export default Component;
