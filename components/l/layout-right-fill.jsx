import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qp4ayr8uq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qp4ayr8uq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:layout-right-fill"} {...others} />);
}

export default Component;
