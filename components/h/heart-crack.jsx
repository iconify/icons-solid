import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/t6kb3_4pb.css';
import '../../css/g/g6atfsbre.css';
import '../../css/n/nya5h6b8h.css';
import '../../css/v/v2f66qb7f.css';
import '../../css/h/hp-p5gbea.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="t6kb3_4pb wm-shadow"/><path class="g6atfsbre wm-shadow"/><path class="nya5h6b8h"/><path class="v2f66qb7f"/><path class="hp-p5gbea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:heart-crack"} {...others} />);
}

export default Component;
