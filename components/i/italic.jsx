import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9f1fhb6v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l9f1fhb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:italic"} {...others} />);
}

export default Component;
