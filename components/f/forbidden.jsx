import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwz2z7_7y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lwz2z7_7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:forbidden"} {...others} />);
}

export default Component;
