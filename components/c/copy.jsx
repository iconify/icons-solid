import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aaq7sqjqw.css';
import '../../css/s/sn777jbnb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aaq7sqjqw"/><path class="sn777jbnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:copy"} {...others} />);
}

export default Component;
