import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hx-2w7bbw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hx-2w7bbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:dots-square-fill"} {...others} />);
}

export default Component;
