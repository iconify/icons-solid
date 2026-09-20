import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg_ed7b7v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vg_ed7b7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:bolt-fill"} {...others} />);
}

export default Component;
