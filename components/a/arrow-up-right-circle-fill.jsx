import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qd20b1j9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qd20b1j9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:arrow-up-right-circle-fill"} {...others} />);
}

export default Component;
