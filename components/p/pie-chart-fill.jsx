import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wd0bgsbjb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wd0bgsbjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:pie-chart-fill"} {...others} />);
}

export default Component;
