import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6agol35u.css';
import '../../css/p/pd8yij20i.css';
import '../../css/e/e70d0jzgw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d6agol35u"/><path class="pd8yij20i"/><path clip-rule="evenodd" class="e70d0jzgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panels-top-left-bold"} {...others} />);
}

export default Component;
