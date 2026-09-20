import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ie91gw6sh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ie91gw6sh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:folder-link"} {...others} />);
}

export default Component;
