import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kc4xlwb7f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kc4xlwb7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:double-square-fill"} {...others} />);
}

export default Component;
