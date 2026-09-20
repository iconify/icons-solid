import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aoxhq7npe.css';
import '../../css/i/ilpqg2l0q.css';
import '../../css/l/ll6_4rblg.css';
import '../../css/o/ovvq_obta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="aoxhq7npe"/><rect class="ilpqg2l0q"/><rect class="ll6_4rblg"/><rect class="ovvq_obta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:grid-masonry"} {...others} />);
}

export default Component;
