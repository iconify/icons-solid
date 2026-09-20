import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5zb0lb0o.css';
import '../../css/n/nlgid0bsv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h5zb0lb0o"/><path clip-rule="evenodd" class="nlgid0bsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:train-fill"} {...others} />);
}

export default Component;
