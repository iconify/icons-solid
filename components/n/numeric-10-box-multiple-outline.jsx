import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csnq9achd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="csnq9achd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:numeric-10-box-multiple-outline"} {...others} />);
}

export default Component;
