import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kj3_hyblf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kj3_hyblf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:box-3d-scan-fill"} {...others} />);
}

export default Component;
