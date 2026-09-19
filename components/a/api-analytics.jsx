import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvfjuh4yd.css';
import '../../css/n/n_mygqbyd.css';
import '../../css/k/k-fz-1bam.css';
import '../../css/k/ktp1web9a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qvfjuh4yd"/><circle class="n_mygqbyd"/><circle class="k-fz-1bam"/><path class="ktp1web9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:api-analytics"} {...others} />);
}

export default Component;
