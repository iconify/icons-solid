import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-fk36gkf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j-fk36gkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bolt"} {...others} />);
}

export default Component;
