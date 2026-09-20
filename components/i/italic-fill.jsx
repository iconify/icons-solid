import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpa6-tfum.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lpa6-tfum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:italic-fill"} {...others} />);
}

export default Component;
