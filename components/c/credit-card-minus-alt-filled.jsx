import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhc3jmhfc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dhc3jmhfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:credit-card-minus-alt-filled"} {...others} />);
}

export default Component;
