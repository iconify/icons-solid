import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ldnl1xm9v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ldnl1xm9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:end-point-circle-bold"} {...others} />);
}

export default Component;
