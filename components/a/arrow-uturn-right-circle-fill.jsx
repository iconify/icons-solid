import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wx9sqxq9g.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="wx9sqxq9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:arrow-uturn-right-circle-fill"} {...others} />);
}

export default Component;
