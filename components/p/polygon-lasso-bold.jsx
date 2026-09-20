import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3xprjw7v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t3xprjw7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:polygon-lasso-bold"} {...others} />);
}

export default Component;
