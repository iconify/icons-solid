import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7w3qc-db.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x7w3qc-db"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:iteration-cw-fill"} {...others} />);
}

export default Component;
