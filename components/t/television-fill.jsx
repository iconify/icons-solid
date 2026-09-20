import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-t5h85bu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s-t5h85bu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:television-fill"} {...others} />);
}

export default Component;
