import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9qs66bnp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o9qs66bnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:alarm-remove"} {...others} />);
}

export default Component;
