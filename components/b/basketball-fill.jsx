import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/evwqcq7np.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="evwqcq7np"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:basketball-fill"} {...others} />);
}

export default Component;
