import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odvk9h54r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="odvk9h54r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:earbuds"} {...others} />);
}

export default Component;
