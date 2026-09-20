import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/olgsfvb6o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="olgsfvb6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:help-fill"} {...others} />);
}

export default Component;
